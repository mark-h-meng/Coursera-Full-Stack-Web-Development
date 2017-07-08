Step 1 Starting MongoDB service at /mongodb/data.
 
 Create folder /mongodb/data at your preferred location;
 Go to folder /mongodb.
 Execute command below to start MongoDB:
  
  mongod --dbpath=data

 And keep the database running.

Step 2 Scaffold out an Express Application

 Scaffold out an Express application named rest-server-passport using the Express generator 

  express rest-server-passport

Step 3 Initialising Node MongoDB Driver and assert package (for testing purpose)

 Create a folder /rest-server-passport and go inside.
 Execute following commands:

  sudo npm install mongodb --save
  sudo npm install assert --save


Step 4 Installing passport authentication support

  sudo npm install passport passport-local passport-local-mongoose --save
  sudo npm install jsonwebtoken --save

Step 5 Setting up a config File
 
 Copy config.js to the target folder \rest-server-passport

Step 6 Copying the necessary files to corresponding directories

 Move the folder /models to the folder /rest-server
 Move the app.js to the folder /rest-server
 Move user.js, verify.js, dishRouter.js, promoRouter.js & leaderRouter.js to the folder /rest-server/router

Step 5 Starting the server & Test

 Install all required modules:

  sudo npm install

 Start the server by executing command below under folder /rest-server:

  npm start

 Follow the data format listed in db.json and test in Postman

 In Postman, you can get all models but dishes:

 http://localhost:3000/leadership (GET) -> Good
 http://localhost:3000/promotions (GET) -> Good
 http://localhost:3000/dishes (GET) -> Error (403 - No Token Provided)

 Now let's register a user and login:

 Post {"username":"admin", "password":"admin"} at http://localhost:3000/users/register, a success result will be returned if everything goes well.

 Post {"username":"admin", "password":"admin"} at http://localhost:3000/users/login, a success result will be returned if everything goes well. Now don't forget to copy the token value.

 Add a header x-access-token with the value you copied in login request, then repeat the GET at http://localhost:3000/dishes, now you should be able to see the records in database.


