// For testing Shopify webhooks and API related things
// bitossi-wholesale-test-store.myshopify.com
const express = require('express');
const request = require('request');
var bodyParser = require('body-parser');

const app = express();

require('dotenv').config();
var port = 3000;

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

app.post('/webhooks/fulfillment_created', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});

app.post('/webhooks/customer_created', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log(body)
  res.send(200);
});

app.post('/shipping_rate', function(req, res){
  console.log("Recieved shipping rate request");
  var rates = {
    "rates" :
    [
      {
      "service_name" : "Test Rate",
      "description" : "Testing rate",
      "service_code" : "abc123",
      "currency" : "AUD",
      "total_price" : "1000"
    }
    ]
  };

  res.send(JSON.stringify(rates));
})

// Subscription Webhooks. Full list - https://docs.google.com/document/d/1ore2bM7_ohM1itqwNYYadprAE7QYAnjHv6dJM--NsQw/edit#
app.post('/webhooks/customer_payment_methods/create', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: customer_payment_methods/create");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/customer_payment_methods/revoke', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: customer_payment_methods/revoke");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/customer_payment_methods/update', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: customer_payment_methods/update");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/subscription_contracts/create', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: subscription_contracts/create");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/subscription_contracts/update', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: subscription_contracts/update");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/subscription_billing_attempts/success', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: subscription_billing_attempts/success");
  console.log(body);
  res.send(200);
});

app.post('/webhooks/subscription_billing_attempts/failure', function(req, res) {
  let body = JSON.parse(Buffer.from(req.body));
  console.log("Webhook Topic: subscription_billing_attempts/failure");
  console.log(body);
  res.send(200);
});

// Routes
app.get("/", function(req, res){
  res.send(200);
});

app.listen(port, console.log('Service listening on ' + port));
