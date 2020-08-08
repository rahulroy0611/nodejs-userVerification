const { MongoClient } = require('mongodb');

const database_name = "meetinsky";
const collection_name = "users";

const mongoclient = require('mongodb').MongoClient;
var url = `mongodb://localhost:27017/${database_name}`;

console.log(url);

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    console.log(`[+] ${database_name} Database created !!`);
    db.close;
});

var url = `mongodb://localhost:27017/`;

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo = db.db(database_name);
    dbo.createCollection(collection_name, (err, res)=>{
        if (err) throw err;
        console.log(`[+] ${collection_name} Collection created !!`);
    });
});

