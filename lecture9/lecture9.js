const express = require('express');
const creditional = require('./Creditional')
const mangoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://" + creditional.userName + ":" + creditional.password + "@andrew-fhkre.mongodb.net/test?retryWrites=true&w=majority"
// var client = mangoClient.connect(url, { useNewUrlParser: true });

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
let DB = null;

app.use(async (req, res, next) => {
  try {
    if (DB) {
      req.DB = DB;
    }
    else {
      const client = await mangoClient.connect(url, { useNewUrlParser: true });
      DB = client.db("USA");
      req.DB = DB;
    }
    next();

  } catch (err) {
    console.log(err);
  }
});
// 1) 
app.get('/getAll', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('zips').aggregate([{"$match" : {"state" :"WA"}} , {"$group" :{"_id" : "$state" , "zip" :{"$push" : "$_id"}}}]).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


// 1) 
app.get('/2', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('zips').aggregate([{"$match" : {"pop" :{"$lt" : 5000}}} , {"$group" :{"_id" : "null" , "zip" :{"$push" : "$_id"}}} , {"$project" : {"_id": 0, "zip":1}}]).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


// 1) 
app.get('/3', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('zips').aggregate([{"$group" :{"_id": {"city" :"$city" , "state" : "$state"} , "sum" : {"$sum" : 1}}} ,{"$match" : {"sum" : { "$gt" : 1}}} , {"$project" : {  "_id.state" : 1 , "_id.city" : 1}} , {"$sort" : {"_id.state" : 1 , "_id.city" : 1}}]).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})





app.get('/4', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('zips').aggregate([{"$group" :{"_id": {"city" :"$city" , "state" : "$state"} , "sum" : {"$sum" : "$pop"}}} ,{"$sort" :{"sum":1}} ,  {"$group" :  {"_id" : "$_id.state" , "city" :{"$first" : "$_id.city"} ,"pop" :{"$first" : "$sum"} }}]).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})




app.listen(3000);
