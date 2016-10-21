"use strict";
var mongo = require("mongodb").MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose  = require("mongoose");
var path = require("path");
var moment = require('moment');

var port  =3000;
var t = 60;
var y= 98;

//let MONGO_URL = "mongodb://ankur1163:lightbulb1@ds013946.mlab.com:13946/ank1163";
var hy =1477074600;
//var hy ="enemy";
//var hy =  "10/22/2016";
var finaldatedate;
var finaldateunix;

var app = express();
//app.listen(5000);
function isValidDate(str) {
  var d = moment(str,'MM/DD/YYYY');
  if(d == null || !d.isValid())
  {
    return false;
  }
  else{
    return true;
  }
}


var checkplease = function(x){
  if (isNaN(x)===false)
  {
   finaldateunix = moment.unix(+x).format("MM/DD/YYYY");
   console.log("the date is "+finaldateunix);
   console.log("unix date is THE "+x);
   var finalmessage = "Unix time is " + finaldateunix + "Regular date is "+ x;
   console.log(finalmessage);
   return finalmessage;
  }
  else if (isNaN(x) === true && isValidDate(x)){
   finaldatedate =  moment(x).unix();
   console.log("unix date is "+finaldatedate);
   console.log("natural date is "+x);
   var finalmessage ="Unix time is "+ x + "Regular date is "+ finaldatedate;
   console.log(finalmessage);
   return finalmessage;

  }
  else{
    console.log("not a valid date");
    finalmessage = "This is invalid time format. NULL";
    return finalmessage;
  }

}


var checkeddate = moment(hy).isValid();
app.listen(process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
var yesfunction = function(){
  console.log("make it really work");
}

var urlencodedParser = bodyParser.urlencoded({extended:false});
/*
app.use('/',function(req,res,next){


next();

});
*/
//app.use("/person",checkplease());
app.post("/person",urlencodedParser, function(req,res){
  var localResult = checkplease(req.body.entry);
 res.send("<html><head></head><body><h1>Person: " + localResult + "</h1></body></html>")

});

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname+'/views/index1.html'));
});
