const express = require('express')
const app = express();
const port = 8000;
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'ZmqVNqnYg58E9O2S6IKKVOVkVbsI9UBoKE5XNyaa8J0biSQAEVnpI6YA7sVnayht',
  APISECRET: 'FRQlQvuZoGofkPXmcv795mEwDvYkys4X8zZa5IITJnAkJ587HEZTzHLazBfBsT2z'
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
