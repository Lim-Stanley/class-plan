from operator import truediv
from numpy import extract
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pandas as pd
import time
import re



options = Options()
options.headless = True
options.add_argument("--window-size=1920,1200")
driver = webdriver.Chrome(options=options, executable_path=r'C:\Users\satye\source\repos\Class_Scraper\chromedriver.exe')

data = pd.DataFrame(columns = ['Index', 'Major', 'ClassesPrep', 'ClassesMajor'])
index = 0

fullMajorList = 'https://admission.ucla.edu/apply/majors'
#majors = ['AmericanIndianStudiesBA', 'AtmosphericandOceanicSciencesBS']
majors = []
errorMajors = ""


def getClasses(s):
    #Initialize classes
    prepString = ""
    whitelist = ["through"]

    #Remove optional courses
    while (s.find("(") != -1):
        startDel = s.find("(") - 1
        endDel = s[startDel:].find(")") + 1
        s = s.replace(s[startDel:endDel + startDel], "")

    #Remove punctuation
    possibleClasses = re.sub(r'[^\w\s]', '', s).split()

    #Weed out words that are not classes
    for word in possibleClasses:
        if word in whitelist:
            prepString += word
            continue
        if len(word) > 5:
            continue
        isClass = True
        numDigits = 0
        numLet = 0
        for char in word:
            if char.isdigit():
                numDigits += 1
            elif char.isupper():
                numLet += 1
            else:
                isClass = False
                break
        if (isClass):
            prepString += word + ","

    return prepString[:-1]

# def extractClassesFromElement(overallComponent, header, i, driver):
#     oListCount = 0
#     paraCount = 0
#     result = ""
#     if (overallComponent == header):
#         prepHTMLComponent = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div')#.get_attribute('innerHTML')
#         for j in range(1, int(prepHTMLComponent.get_attribute('childElementCount')) + 1):
#             try:
#                 textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/p['+str(paraCount + 1)+']').get_attribute('innerHTML')
#                 paraCount += 1
#             except:
#                 textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/ol['+str(oListCount + 1)+']').get_attribute('innerHTML')
#                 oListCount += 1
#             print(textHolder)
#             result += getClasses(textHolder) + ","
#     return result
    

driver.get(fullMajorList)

for i in range(3, 111):
#//*[@id="block-admissions2020-content"]/article/div/div[1]/div/div/div[1]/section[2]/div[2]/p[110]
    majorName = driver.find_element_by_xpath('//*[@id="block-admissions2020-content"]/article/div/div[1]/div/div/div[1]/section[2]/div[2]/p[' + str(i) + "]").text
    majorName = majorName.replace('new', "")
    majorName = re.sub('[\W_]+', '', majorName)
    majorName = re.sub(r'[0-9]+', '', majorName)
    majors.append(majorName)
    errorMajors = ""

testurl = "https://catalog.registrar.ucla.edu/major/2021/AmericanIndianStudiesBA"

# driver.get(fullMajorList)
# overallComponent = driver.find_element_by_xpath('//*[@id="block-admissions2020-content"]/article/div/div[1]/div/div/div[1]/section[2]/div[2]/p[3]')
# print(overallComponent.get_attribute('innerHTML'))



for url in majors:
    #Get HTML
    driver.get('https://catalog.registrar.ucla.edu/major/2021/' + url)

    #Initializing variables
    prepClasses = "ERROR "
    majorClasses = "ERROR "
    paraCount = 0
    oListCount = 0

    #Fetch class raw HTML
    try:
        for i in range(2, 10):
            if (prepClasses != 'ERROR ' and majorClasses != 'ERROR '):
                break
            overallComponent = driver.find_element_by_xpath('//*[@id="Requirements"]/div[' + str(i)+ ']/div[1]/div/div[1]/strong').get_attribute('innerHTML')
            

            # majorClasses = extractClassesFromElement(overallComponent, "The Major", i, driver)
            # prepClasses = extractClassesFromElement(overallComponent, "Preparation for the Major", i, driver)
            if (overallComponent == "The Major"):
                prepHTMLComponent = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div')#.get_attribute('innerHTML')
                for j in range(1, int(prepHTMLComponent.get_attribute('childElementCount')) + 1):
                    try:
                        textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/p['+str(paraCount + 1)+']').get_attribute('innerHTML')
                        paraCount += 1
                    except:
                        textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/ol['+str(oListCount + 1)+']').get_attribute('innerHTML')
                        oListCount += 1
                    print(textHolder)
                    if (majorClasses == "ERROR "):
                        majorClasses = getClasses(textHolder) + ","
                    else:
                        majorClasses += getClasses(textHolder) + ","
                oListCount = 0
                paraCount = 0

            if (overallComponent == "Preparation for the Major"):
                prepHTMLComponent = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div')#.get_attribute('innerHTML')
                for j in range(1, int(prepHTMLComponent.get_attribute('childElementCount')) + 1):
                    try:
                        textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/p['+str(paraCount + 1)+']').get_attribute('innerHTML')
                        paraCount += 1
                    except:
                        textHolder = driver.find_element_by_xpath('//*[@id="Requirements"]/div['+str(i)+']/div[2]/div/div/ol['+str(oListCount + 1)+']').get_attribute('innerHTML')
                        oListCount += 1
                    print(textHolder)
                    if (prepClasses == "ERROR "):
                        prepClasses = getClasses(textHolder) + ","
                    else:
                        prepClasses += getClasses(textHolder) + ","
                oListCount = 0
                paraCount = 0
    except:
        errorMajors += url + ","


    # try:
    #     try:
    #         prepHTML = driver.find_element_by_xpath('//*[@id="Concentrations"]/div[2]/div[2]/div/div/p[2]').get_attribute('innerHTML')
    #         majorHTML = driver.find_element_by_xpath('//*[@id="Concentrations"]/div[2]/div[2]/div/div/p[4]').get_attribute('innerHTML')
    #     except:
    #         prepHTML = driver.find_element_by_xpath('//*[@id="Requirements"]/div[2]/div[2]/div/div/p').get_attribute('innerHTML')
    #         majorHTML = driver.find_element_by_xpath('//*[@id="Requirements"]/div[4]/div[2]/div/div/p').get_attribute('innerHTML')
    # except:
    #     errorMajors += url + ', '

    # data.loc[index] = [index,  url[url.rfind('/') + 1:], getClasses(prepHTML), getClasses(majorHTML)]
    if (majorClasses == ""):
        majorClasses = "ERROR "
    if (prepClasses == ""):
        prepClasses = "ERROR "
    data.loc[index] = [index,  url[url.rfind('/') + 1:], prepClasses[:-1], majorClasses[:-1]]
    index+=1

print(errorMajors)
data.to_csv('test.csv')

