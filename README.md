# WorkoutBuddyWebsite
This is our code for for the website workout buddy. How this is works is that you have a website where you enter your information and based on that it tailors the perfect workout buddies for you. 
The website has a messaging system where you can send requests to workout with other users and chat with likeminded people 
# How it works
You enter in things such as your, age, location, and your stats for certain workouts. Based on that we send queries the sql database and display the 5 best workout buddies in your area. 
# How to use the SQL squeries 
// Command 0: Add user and their stats

{"cmd":0,"name":"Gary Oak","age":24,"sex":"Male","email":"gary_prof_oak@gmail.com","password":"passABC","city":"Riverside","bench":145,"squat":200,"deadlift":250}
// Command 1: Get user based on their name

{"cmd":1,"name":"Gary Oak"}
// Command 2: Get user stats based on their name

{"cmd":2,"name":"Gary Oak"}
// Command 3: Modify user's stats

{"cmd":3,"name":"Gary Oak", "bench":147,"squat":203,"deadlift":259}
// Command 4: Send message format

{"cmd":4,"sender":"Gary Oak", "receiver": "Jane Doe", "content":"Hi! Want to work out some time?"}

{"cmd":4,"sender":"Jane Doe", "receiver": "Gary Oak", "content":"I'd love to! What time works best for you?"}

// Command 5: Get all messages between two users

{"cmd":5,"sender":"Jane Doe", "receiver": "Gary Oak"}
// Command 6: Search for users with a similar weight class

{"cmd":6,"type":"bench","weight":145}
// Command 7: Get all users in the city of Riverside

{"cmd":7,"city":"Riverside"}
// Command 999: Close the database

{"cmd":999}
This is just the backend. When the thing is connected to the front end, there are buttons so that you would not actually have to press the commands in by yourself. 
# What programming languages did we use
We mainly used SQL wrapped in python for the backend while the clientside and the front end is done in react.js, html, and css
# How to make it work
To make it work just go into the website link provided  or clone the repository and run it by yourself You will need to download several things such as the react and hyml framework, have at least python 3.8. if you are using visual studio, you could use extensions to facillitate the project. The two main ones are the code runner and the javascript es6 extensions. 
