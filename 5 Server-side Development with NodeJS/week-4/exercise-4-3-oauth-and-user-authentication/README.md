Step 1 Starting MongoDB service at /mongodb/data.
 
 Create folder /mongodb/data at your preferred location;
 Go to folder /mongodb.
 Execute command below to start MongoDB:
  
  mongod --dbpath=data

 And keep the database running.

Step 2 Scaffold out an Express Application

 Scaffold out an Express application named mongoose-population using the Express generator 

  express mongoose-population

Step 3 Initialising all required npm modules.

 Go to the folder /mongoose-population.
 Execute following commands:

  sudo npm install mongodb --save
  sudo npm install assert --save
  sudo npm install mongoose --save
  sudo npm install mongoose-currency --save

Step 4 Installing passport & OAuth authentication support

  sudo npm install passport passport-local passport-local-mongoose --save
  sudo npm install jsonwebtoken --save
  sudo npm install passport-facebook --save

Step 5 Setting up a config File
 
 Copy config.js to the target folder /mongoose-population

Step 6 Copying the necessary files to corresponding directories

 * Move / Merge the folder /models to the folder /mongoose-population
 * Move the app.js to the folder /mongoose-population
 * Move the config.js to the folder /mongoose-population
 * Move the authenticate.js to the folder /mongoose-population
 * Move / Merge the folder /routes to the folder /mongoose-population

Step 7 Registering your app on Facebook

 Go to https://developers.facebook.com/apps/ and register your app by following the instructions there and obtain your App ID and App Secret, and then update config.js with the information.

 Start your server and test your application. You can log in using Facebook by accessing https://localhost:3443/users/facebook which will redirect you to Facebook for authentication and return to your server.

Step 8 Starting the server & Test

 Install all required modules:

  sudo npm install

 Start the server by executing command below under folder /rest-server:

  npm start
