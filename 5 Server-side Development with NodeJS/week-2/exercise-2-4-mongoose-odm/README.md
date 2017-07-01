Step 1 Installing MongoDB object modeling for Node.js named "mongoose"

 Create a folder /node-mongoose and go inside.
 Execute following commands:

  sudo npm install mongoose --save
  sudo npm install assert --save

Step 2 Implementing a Node application to connect mongoose to MongoDB

 Create a folder /models inside the /node-mongoose folder and go inside.
 Create dishes-1.js (the file is already there).
 Move out to folder /node-mongoose and create server-1.js (the file is already there).
 Run the server-1:

  node server-1.js

Step 3 Adding more features

 > In previous step, we insert document by initializing a Dishes model and calling "save" function, now we introduce "Dishes.create()" to do so instead.
 > Moreover, we also introduce "Dishes.findByIdAndUpdate" to do finding by entity ID.

 Create server-2.js (the file is already there) and run it:

  node server-2.js

Step 4 Adding sub-documents

 > We want to introduce a sub-document schema named "comment", so thus each time a "dish" model been created, a sub-model "comment" been created, too.
 
 Go to folder /models and create dishes-3.js (the file is already there).
 Create another variation of Node server as server-3.js (the file is already there) and run it:

  node server-3.js
