Step 1 Installing MongoDB

 Refer to the official website for installing MongoDB.
 For Ubuntu, go to https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Step 2 Initialising MongoDB to current project

 Create a folder named "mongodb", and create another folder "data" inside /mongodb.

 Move to /mongodb and run the command below:
  mongod --dbpath=data

 Thus a MongoDB database has been set-up in /mongodb/data.

Step 3 Using MongoDB through Mongo REPL shell

 Open another command window and then type the following at the command prompt to start the mongo REPL shell:
  mongo

 The Mongo REPL shell will start running and give you a prompt to issue commands to the MongoDB server. At the Mongo REPL prompt, type the following commands one by one and see the resulting behavior:
  db
  use conFusion
  db
  db.help()

 Create a collection named dishes, insert a new dish document in the collection, and test:
  db.dishes.insert({ name: "Uthapizza", description: "Test" });
  db.dishes.find().pretty();

Note:
 For each time you want to use MongoDB:
  (1) Go to the folder /mongodb
  (2) Open a terminal and start MongoDB by:
    mongod --dbpath=data
  (3) Open another terminal to start MongoDB REPL shell:
    mongo
    use conFusion
    db.dishes.find().pretty()