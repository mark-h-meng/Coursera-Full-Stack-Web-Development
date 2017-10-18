var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dboper = require('./operations');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    // function insertDocument(db, document, collection, callback)
    dboper.insertDocument(db, 
        { 
            name: "Vadonut", 
            description: "Test" 
        },
        "dishes", function (result) {
            console.log(result.ops);
            // function findDocuments(db, collection, callback)
            dboper.findDocuments(db, "dishes", function (docs) {
                console.log(docs);
                // function updateDocument(db, document, update, collection, callback)
                dboper.updateDocument(db, 
                    { name: "Vadonut" },
                    { description: "Updated Test" },
                    "dishes", 
                    function (result) {
                        console.log(result.result);
                        // function findDocuments(db, collection, callback)
                        dboper.findDocuments(db, "dishes", function (docs) {
                            console.log(docs)

                            db.dropCollection("dishes", function (result) {
                                console.log(result);

                                db.close();
                            });
                        });
                    });
            });
        });
});