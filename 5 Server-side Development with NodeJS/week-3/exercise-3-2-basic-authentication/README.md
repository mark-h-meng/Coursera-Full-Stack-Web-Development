Step 1 Scaffold out an Express Application

 Scaffold out an Express application named basic-auth using the Express generator 

  express basic-auth

Step 2 Copying the necessary files to corresponding directories

 Move (Merge) the folder /public to the folder /basic-auth
 Move the server.js to the folder /basic-auth
 
Step 3 Installing necessary modules and Starting the server

 Install all necessary packages stated in package.json

  npm install

 Start the node server by executing command below under folder /basic-auth

  node server

Step 4 Running the server by using correct authentication

 Open browser and go to http://localhost:3000/
 Type in correct authentication to browse the site:

  User: admin
  Password: password 

 Wrong combination of user & password will return a 401 error and pop-up to let you try again.