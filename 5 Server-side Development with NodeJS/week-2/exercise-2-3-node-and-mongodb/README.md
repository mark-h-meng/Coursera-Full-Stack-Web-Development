# Part I

Step 1 Initialising Node MongoDB Driver and assert package (for testing purpose)

 Create a folder /node-mongodb and go inside.
 Execute following commands:

  sudo npm install mongodb --save
  sudo npm install assert --save

Step 2 Creating a node script to operate mangoDB

 Copy simpleserver.js in /node-mongodb

Step 3 Starting MongoDB service at /mongodb/data.
 
 Create folder /mongodb/data at your preferred location;
 Go to folder /mongodb.
 Execute command below to start MongoDB:
  
  mongod --dbpath=data

 And keep the database running.

Step 4 Running the node script
 
 Move to the /node-mongodb and execute the simpleserver.js:

  node simpleserver.js

---

# Part II

Step 1 Creating operations.js to define the basic MongoDB operations for node server
 
 File is already there.

Step 2 Creating server.js to run some basic operation and verify with the log display

 File is already there.

Step 3 Starting MongoDB service if not done so, and running the node server

  node server.js