// For testing Shopify webhooks and API related things
// bitossi-wholesale-test-store.myshopify.com
const express = require('express');
const request = require('request');
var bodyParser = require('body-parser');

const app = express();
var port = 80;

app.use('/webhooks', bodyParser.raw({ type: 'application/json' }));
app.use(bodyParser.json());

app.post('/webhooks/product_update', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});

app.post('/webhooks/inventory_level_update', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});

app.post('/webhooks/checkout_update', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});



app.post('/webhooks/customer_created', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});

app.listen(port, console.log('Service listening on ' + port));
