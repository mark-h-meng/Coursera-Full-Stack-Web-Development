Step 1 Starting MongoDB service at /mongodb/data.
 
 Create folder /mongodb/data at your preferred location;
 Go to folder /mongodb.
 Execute command below to start MongoDB:
  
  mongod --dbpath=data

 And keep the database running.

Step 2 Initialising Node MongoDB Driver and assert package (for testing purpose)

 Create a folder /rest-server and go inside.
 Execute following commands:

  sudo npm install mongodb --save
  sudo npm install assert --save

Step 3 Scaffold out an Express Application

 Scaffold out an Express application named rest-server using the Express generator 

  express rest-server

Step 4 Copying the necessary files to corresponding directories

 Move the folder /models to the folder /rest-server
 Move the app.js to the folder /rest-server
 Move dishRouter.js, promoRouter.js & leaderRouter.js to the folder /rest-server/router

Step 5 Starting the server & Test

 Start the server by executing command below under folder /rest-server:

  npm start

 Follow the data format listed in db.json and test in Postman
