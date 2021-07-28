const express = require('express')
const app = express();
const port = 8000;
const Binance = require('node-binance-api');
const mongodb = require('./generalDB.js');

const binance = new Binance().options({
  APIKEY: 'ZmqVNqnYg58E9O2S6IKKVOVkVbsI9UBoKE5XNyaa8J0biSQAEVnpI6YA7sVnayht',
  APISECRET: 'FRQlQvuZoGofkPXmcv795mEwDvYkys4X8zZa5IITJnAkJ587HEZTzHLazBfBsT2z'
});

async function CoinFunc(){
  await binance.bookTickers((error, ticker) => {
  var CoinPair=[]
  let coins=ticker
  for (let i = 0; i < coins.length; i++) {
     CoinPair.push(coins[i]["symbol"]);
  }
  let Symbol=JSON.parse('[{"symbol":'+JSON.stringify(CoinPair)+'}]')
  mongodb.MongFunc(Symbol)
});
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
