Open a terminal:

 > mongo
 > use conFusion
 > db.users.find().pretty()

Create a new user "admin":

 > db.users.insert({"username":"admin", "admin":"true", "password":"admin"})
 
Suppose you have created a user named "admin":

 > db.users.update({username: "admin"}, {$set:{admin: true}})
 > db.users.find({"username":"admin"}).pretty()

Now the user "admin" should have administrative rights.
