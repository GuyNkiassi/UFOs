# Project Overview

The purpose of this project was to learn how to take data that is stored as a JavaScript array or list and create a table to organize the information that will visually adjust as "events" change (i.e. filtering). In order to react when an element is changed, we use Javascript functions to loop through the data to build the table and create a customized dashboard. The customizations include filters with event listeners that will record the information when an element has changed and develop an interactive webpage. Filters can be applied in many ways. In this exercise, we reviewed how to display default data in the table, listen for a button click or trigger the table to update based on the user's input with a select criteria. Finally, we use HTML, Bootstrap and CSS to read the Javascript code and create a webpage that is easy to view, includes filters, images, and a synopsis of the topic.


## Topic

Are we alone in this universe? UFO sightings have been an obsession among many for centuries. Are they real or some government conspiracy? We have been tasked to help Dana with building a webpage in which others can access information of reported sightings and see for themselves. This webpage should include:

A description or summary of the topic
A table to display all of the information from the data source
Search filters that will allow for visitors to update the table based on the search criteria they enter.




### Results

# UFOs Datashboard

#### Here you can filter UFO data by five craterias (datatime, city, state, country and sahpe).

![UFO Images](./static/images/dashboard.png)

![UFO Images](./static/images/nasa.png)

#### Drawbacks:

Unfortunately, the page has several drawbacks. They include:

The search field is "case-sensitive". The table will not update if you do not enter exactly how the data is stored and does not allow for partial entries. This is an issue because it does not intuitively tell the user how the information should be entered other than the "default" example shown.

There is no button to click, wording or action that tells the user that the table will update after you hit "enter".

The data is limited and outdated since it is not linked to a "live" source.

Recommendations for further development:

With the following enhancements, it can greatly improve the user's experience.

Add additional customizations, such as click-buttons, dropdown list, and/or auto-fill that can help "guide" the user and make the page more interactive.

Add functionality to pull the data from a live source that includes current and archived data not limited to only the United States, but globally.

Add a "Latest News" section that will highlight an article showing the most recent reported sighting.