const express = require('express')
const app = express();
const port = 8000;
const Binance = require('node-binance-api');
const mongodb = require('./generalDB.js');
const MongoClient = require('mongodb').MongoClient;

const binance = new Binance().options({
  APIKEY: 'ZmqVNqnYg58E9O2S6IKKVOVkVbsI9UBoKE5XNyaa8J0biSQAEVnpI6YA7sVnayht',
  APISECRET: 'FRQlQvuZoGofkPXmcv795mEwDvYkys4X8zZa5IITJnAkJ587HEZTzHLazBfBsT2z'
});


async function CoinFunc(){
  await binance.bookTickers((error, ticker) => {
    let coins=ticker;
    for (let i = 0; i < coins.length; i++) {
       let Symbol=JSON.parse('[{"symbol":'+JSON.stringify(coins[i]["symbol"])+'}]');
       mongodb.MongFunc(Symbol)
    }
  });
}

// async function CoinFunc(){
//   await binance.bookTickers((error, ticker) => {
//     var CoinPair=[]
//     let coins=ticker
//     for (let i = 0; i < coins.length; i++) {
//        CoinPair.push(coins[i]["symbol"]);
//     }
//     let Symbol=JSON.parse('[{"symbol":'+JSON.stringify(CoinPair)+'}]')
//     console.log(Symbol);
//     return mongodb.MongFunc(Symbol)
//   });
// }

async function VolFunc(){
  await binance.candlesticks("EOSETH", "1h", (error, ticks, symbol) => {
    // console.info("candlesticks()", ticks);
    let last_tick = ticks[ticks.length - 1];
    console.info(ticks);
    let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
    // console.info("time: "+time,"high: "+high,"low: "+low,"volume: "+volume,"closeTime: "+closeTime);
    let Volume=[]
    for (let i = 0; i < ticks.length; i++) {
       Volume.push(ticks[i][5])
    }
    let AvgPrice=[]
    for (let i = 0; i < ticks.length; i++) {
       let Price=(Number(ticks[i][2])+Number(ticks[i][3]))/2
       AvgPrice.push(Price)
    }
    // console.info("high: "+high,"low: "+low,"volume: "+Volume);
  }, {limit: 672, endTime: 1628161283000});
}
VolFunc()

app.get('/FinalPage', mongodb.Data)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
