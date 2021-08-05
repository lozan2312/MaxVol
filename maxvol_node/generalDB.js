const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/VolData";


module.exports.MongFunc = async(symbols)=>{
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VolData");
  // dbo.collection("CoinPair").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
  // dbo.collection("CoinPair").insertMany(symbols, function(err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  //   db.close();
  });
};
// });

let GetTimeData = async ()=>{
  let TimeData=[];
  const client = await MongoClient.connect(url);
  const dbo = client.db("VolData")
  const result = await dbo.collection("TimeFrame").find().toArray();
  client.close();
  TimeData = JSON.parse(JSON.stringify(result))
  return await TimeData
}

let GetCoinData = async ()=>{
  let CoinData=[];
  const client = await MongoClient.connect(url);
  const dbo = client.db("VolData")
  const result = await dbo.collection("CoinPair").find().toArray();
  client.close();
  CoinData = JSON.parse(JSON.stringify(result))
  return await CoinData
}


module.exports.Data = async (req,res) =>{
  res.json(JSON.parse('{"Coins":'+JSON.stringify(await GetCoinData())+',"Time":'+JSON.stringify(await GetTimeData())+'}'))
}
