import requests
import re
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

URL = "https://sa.ucla.edu/ro/Public/SOC/Results/ClassDetail?term_cd=21F&subj_area_cd=COM%20SCI&crs_catlg_no=0033%20%20%20%20&class_id=187101200&class_no=%20001%20%20"
# URL for a given class Spring 2022 in the Schedule of Classes (above is CS33)
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
# parses entire page

div = soup.find('div', id="course_requisites").find("tbody")
if div is not None:
    div = div.findAll("td")
    i = 0
    requisites = ""
    while i < len(div):
        requisites += str(div[i])
        i += 5
# Finds div element with unique id="course_requisites" and extracts the course name/identifier information
    intermediate = str(requisites).replace('<td><button class="popover-right linkLikeButton" data-content=', "")
    intermediate2 = str(intermediate).replace("</td>", "")
    intermediate3 = re.sub(r'</button>', "", str(intermediate2))
    intermediate4 = re.sub(r'[()>"]', "", str(intermediate3))
    intermediate4 = [intermediate4]
    intermediate5 = re.split(r' and\S| or\S', str(intermediate4))
# Cleaning up the data from "requisites" by removing HTML tags and special characters.
# Removes and/or separators between classes but also chops off some characters along with it

    or_separators = re.findall(r' or\S', str(intermediate4))
    and_separators = re.findall(r' and\S', str(intermediate4))
    separators = re.findall(r' and\S| or\S', str(intermediate4))
# Master list and lists of "or" and "and" separators to use below

    options = 1
    intermediate5[0] += "  Option 1"
    for i in range(len(separators)):
        keep = separators[i][-1]
        intermediate5[i+1] = keep + intermediate5[i+1]
        if separators[i] in or_separators:
            if f"Option {options}" not in intermediate5[i]:
                intermediate5[i] += f"  Option {options}"
            intermediate5[i+1] += f"  Option {options+1}"
            options += 1
        elif separators[i] in and_separators:
            if f"Option {options}" not in intermediate5[i]:
                intermediate5[i] += f"  Option {options}"
            options = 1
# Fixes chopped off characters, but more importantly appends "Option 1", 2, etc. to classes
# based on whether they are strictly required ("and" separator) or simply one of many options ("or" separator)

    df = pd.DataFrame(intermediate5)
    df = df[0].str.split('  ', expand=True)
    df.columns = ["Course Name", "Course Identifier", "Option"]
    df.loc[df.index[-1], "Option"] = f"Option {options}"
    df = df.replace({"\[": "", "'": "", "\]": ""}, regex=True)
# Converts data to a pandas DataFrame, splits each entry into its columns, names columns, adds Option for the last row (did not get to it in the loop), and cleans data by removing some special characters
else:
    df = pd.DataFrame(np.zeros((1, 3)))
    df.columns = ["Course Name", "Course Identifier", "Option"]
    print(df)

print(df)

df.to_csv("CS33_prereqs.csv", index=False)
# Converts dataframe to csv without row indices, exports to "CS33.csv" file