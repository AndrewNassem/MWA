
const creditional= require('./Creditional');
const mangoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://" +creditional.userName + ":"+creditional.password+"@andrew-fhkre.mongodb.net/test?retryWrites=true&w=majorit"
var client =   mangoClient.connect(url , { useNewUrlParser: true });
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let DB = null;

app.use(async (req, res, next) => {
  try {
    if (DB) {
      req.DB = DB;
    } else {
     client =  await mangoClient.connect(url , { useNewUrlParser: true });
      DB = client.db('homework7');
      req.DB = DB;
    }
    next()
  } catch (error) {
    console.log(error)
  }

})

app.get('/searchAll/course/:courseName', async (req, res) => {
  try {
    console.log(req.params.courseName)
    let doc = await req.DB.collection("courses").find({"course": req.params.courseName}).toArray();
    // console.dir(doc)
    res.json(doc)
  } catch (err) {
    console.log(err)
  }
})

app.get('/search/course/:courseName', async (req, res) => {
  try {
    console.log(req.params.courseName)
    let doc = await req.DB.collection("courses").findOne({"course": req.params.courseName});
    // console.dir(doc)
    res.json(doc)
  } catch (err) {
    console.log(err)
  }
})

app.post('/add' , async(req , res) =>  {
  try{
    console.log(req.body)
    let doc = await req.DB.collection('courses').insertOne(req.body)
    res.end(doc);
  }
  catch(err){
    console.log("error" + err);
  }
})

app.delete('/' , async(req , res) =>  {
  try{
    console.log(req.query.lectureName)
    let doc = await req.DB.collection('courses').remove({"lecture" : req.query.lectureName})
    res.end(doc);
  }
  catch(err){
    console.log("error" + err);
  }
})

app.listen(3000)





