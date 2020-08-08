var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("meetinsky");
  var myobj1 = { name: "Rahul Roy", email: "r.rahul@itorizin.in", type: "moderator"};
  var myobj2 = { name: "Tanmoy Samanta", email: "s.tanmoy@itorizin.in", type: "moderator"};
  var myobj3 = { name: "Sourav Pal", email: "p.sourav@itorizin.in", type: "moderator"};

  dbo.collection("users").insertOne(myobj1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  dbo.collection("users").insertOne(myobj2, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  dbo.collection("users").insertOne(myobj3, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

});