# Technical interview for Travcorp Poland

In this simple project I present layout for list of trips for travel agency. I am consuming my own api with fake json data. The source of getting data can be easily replaced (e.g for db or csv file) 

## Used technologies:
- Node with Express
- React, MUI, Css

## How to install project:
1. in the root folder type: npm install
2. cd into client folder and type: npm install --force

## How to run project:
1. in the root folder type: npm start 
2. in new terminal cd into client folder and type: npm start 
3. visit http://localhost:3000/ in your browser
(both backend and frontend app must be running simultaneously for correct project working)

## Remarks:
- Both backend app and frontend app run independently. Because of that you must install dependencies first and then run apps individually.
- Fake data exists in data.json in server folder. Currently there are 13 items. You can easily copy & paste and simulate more items. 
- Images for projects are fake and come from internet. Because of that they cannot work no longer in the future or present sth else. There is default image if no urlImage exists for item.
- --force flag is necessary for installing frontend dependencies because of the issues with React version and @mui/styles lib 
- I am using mui lib for RWD.
