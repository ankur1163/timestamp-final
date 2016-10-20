"use strict";
var mongo = require("mongodb").MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose  = require("mongoose");

var port  =3000;
var t = 60;
var y= 98;

//let MONGO_URL = "mongodb://ankur1163:lightbulb1@ds013946.mlab.com:13946/ank1163";


var app = express();
//app.listen(5000);
app.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send('Hello World!');





});
