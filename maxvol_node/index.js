const express = require('express')
const app = express();
const port = 8000;
const Binance = require('node-binance-api');
const mongodb = require('./generalDB.js');
const MongoClient = require('mongodb').MongoClient;
const jsonParser = express.json();

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

async function VolFunc(req, res){
  let { coin, time } = req.body;
  await binance.candlesticks(coin, "1h", (error, ticks, symbol) => {
    // console.info("candlesticks()", ticks);
    let last_tick = ticks[ticks.length - 1];
    let [open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
    // console.info("time: "+time,"high: "+high,"low: "+low,"volume: "+volume,"closeTime: "+closeTime);
    let Volume=[]
    for (let i = 0; i < ticks.length; i++) {
       Volume.push(parseFloat(ticks[i][5]))
    }
    console.log(Volume
    );
    let AvgPrice=[]
    for (let i = 0; i < ticks.length; i++) {
       let Price=(Number(ticks[i][2])+Number(ticks[i][3]))/2
       AvgPrice.push(Price.toFixed(3))
    }
    console.log(AvgPrice);

// let indx=[];
// for (let i=0;i<AvgPrice.length;i++){
//   if (AvgPrice[i]==AvgPrice[i+1]){
//   indx[i]=i+1
// }
// else{
//   indx[i]=i
//
// }
// }
let indx=[];
let count=0;
for (let i=1;i<AvgPrice.length;i++){
    if (AvgPrice[i]==AvgPrice[i-1]){
      count=count+1
    }
    else{
      indx.push(count)
    }
  }

console.log(indx);
// NewAvg=[]
// NewVol=[]
// for (let i = 0; i < AvgPrice.length; i++) {
//   for (let j = 1; j < AvgPrice.length; j++){
//     if (AvgPrice[i]==AvgPrice[j]) {
//       Volume[i]= Volume[i]+Volume[j]
//     }
//     else{
//       NewVol.push(Volume[j])
//       NewAvg.push(AvgPrice[j])
//     }
//  }
//   NewVol.push(Volume[i])
//   NewAvg.push(AvgPrice[i])
// }
//
// console.log(NewVol);
// console.log(NewAvg);
    // let indx=[];
    // i=0;
    // j=0;
    // while(i<AvgPrice.length){
    //   if (AvgPrice[j]==AvgPrice[j+1]){
    //     i=i+1
    // }
    // }
    // for (price in AvgPrice) {
    // for (let j = 0 ;j < AvgPrice.length;j++) {
    //   if (AvgPrice[j]==AvgPrice[j+1]){
    //     indx.push(j+1)
    // }
    //   else{
    //   PriceCoin.push(AvgPrice[j-1])
    //   result.push(Volume[j])
    //   j=j+1
    // }
    // }
    //   }
    //



    // let newAvg=[];
    // let newVol=[];
    // for (let i = 0; i < AvgPrice.length; i++) {
    //   for (let j = 1; j < AvgPrice.length; j++) {
    //     if (AvgPrice[i]==AvgPrice[j]){
    //       newVol.push(Volume[i]+Volume[j])
    //       newAvg.push(AvgPrice[i])
    //     }
    //     else{
    //       newVol.push(Volume[j])
    //       newAvg.push(AvgPrice[j])
    //     }
    // }
    // }



console.log(11131.689+5045.586);
    res.send({ volume: Volume, avgPrice: AvgPrice });
    // console.info("high: "+high,"low: "+low,"volume: "+Volume);
  }, { limit: time });
}

app.get('/FinalPage', mongodb.Data);
app.post('/FinalPage', jsonParser, VolFunc);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
