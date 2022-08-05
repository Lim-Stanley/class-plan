# PlannedBruin HOTH-9 Project
This repository provides the PlannedBruin application, a student-friendly enrollment planner designed to supply UCLA students with a four year class schedule, saving students from suffering from the common struggles surrounding enrollment restrictions, class availability, confusing pre-requisite requirements, and more.

https://user-images.githubusercontent.com/92659795/182241656-d34caf7a-65a6-4e62-80ac-d2392d3e2d4c.mp4

## Table of Contents
1. [Organization](#organization)
2. [Installation](#installation)
3. [Opening and Operation](#opening-and-operation)
4. [Features](#features)
5. [Future Plans](#future-plans)

## Organization
- [`public/index.html`](public/index.html) is the location where React initially runs the application
- [`scraping`](scraping) contains all of the resources we used to scrape the [UCLA course catalog](https://registrar.ucla.edu/academics/course-descriptions) ([`course_reqs.py`](scraping/course_reqs.py)) and [UCLA major requirements](https://admission.ucla.edu/apply/majors) ([`prereqs.py`](scraping/prereqs.py))
- [`src`](src) contains [`index.js`](src/index.js) and [`App.js`](src/App.js), which organize all of the functional parts of the application
- [`src/components`](src/components) contains the homepage and all of the functional components used to make up the homepage 

## Installation

1. Install Git
2. Create a folder on your computer where you can download this repository
3. Clone this repository to your computer: `git clone https://github.com/Lim-Stanley/class-plan`
4. Download [Node.js](https://nodejs.org/en/)
5. Install mui with `npm install @mui/material @emotion/react @emotion/styled`

# Opening and Operation

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To experiment with different class plans, select any major on the left toolbar.

<img width="500" alt="PlannedBruinArrow" src="https://user-images.githubusercontent.com/92659795/182254080-4942cbc3-3e34-47ba-ada2-76af9657ff53.png">


## Features
In this section we describe the intended features of our program.
##### Data Scraping
In order to create these schedules for each major, we had to first find the necessary courses to graduate for each major. Along with this, we needed all of the prerequisites for each course, to ensure that a course does not get recommended prior to its prerequisites getting recommended (ex: MATH32A should get recommended before MATH32B).

Given that UCLA does not have a publically available database with this information, we had to scrape both the [UCLA course catalog](https://registrar.ucla.edu/academics/course-descriptions) to get information about pre-requisites, and [UCLA major requirements](https://admission.ucla.edu/apply/majors) to get information about what courses are needed to graduate with a specific major. 

While we did not create a functioning algorithm to cleanly data scrape either source of data, we do plan in the future to refine our data scraping to be able to extract the above information from the stated sources

##### Course Planning Algorithm
Given the list of courses needed for a major, and all of the prerequisites of every course, we intend to create an algorithm that will return a valid ordering of courses to take within the four years at UCLA.

Since we have not created a valid method of scraping all of the data from the UCLA websites, we have not yet implemented our course planning algorithm into the application.

However, we have designed the algorithm. The algorithm would be to treat each class as a node, with a directed edge being formed from a class to each of its prerequisites. Then, we would get a topological ordering of the graph, and assign general education requirements(GE's) wherever we find space to do so. 
## Future Plans
In the future, we plan on adding more flexibility in the application. Specifically, we wish to consider more information about a student. Given that it is common for a UCLA student to have a minor/minors or a double major, we want to accomodate flexibility to that, by adding a selection bar that allows you to select your respective majors and minors.

Along with this, we plan on adding course editing. The course schedule that we come up with may not at times be favorable to the student, and if they want to remove a course, or to add an additional course that is not in their major, we wish to give them the opportunity to do so, allowing the algorithm to run with pre-inserted slots. Along with non-favorability, this feature will also help students be able to select their own GE's that they wish to take. Currently, our algorithm displays GE's as simply GE's, but if we give students the ability to select the specific GE's they want, we will be able to generate a more accurate schedule.

Finally, we plan on integrating the recommendation system with [Bruinwalk](https://www.bruinwalk.com/), a hub for UCLA professor ratings, that will recommend classes that are taught by highly rated professors over classes that are taught by lower rated professors. Along with this, we plan on integrating the recommendation system with MyUCLA's [Degree Audit Reporting System (DARS)](https://www.seasoasa.ucla.edu/dars/) and class planner, the current offical resources avaiable to UCLA students (provided by UCLA) for creating class planners, as a guide for students.
