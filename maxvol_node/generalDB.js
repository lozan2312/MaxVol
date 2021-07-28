const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/VolData";


module.exports.MongFunc = async(symbols)=>{
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VolData");
  // dbo.collection("CoinPair").insertMany(symbols, function(err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  //   db.close();
  // });
});
}
