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
      DB = client.db("test");
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
    var docs = await req.DB.collection('restaurants').find({}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})
//2
app.get('/getItems', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({}).project({ "id": 1, "name": 1, "district": 1, "cuisine": 1, "_id": 0 }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})
//3)
app.get('/getWithoutID1', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({}).project({ "_id": 0, "id": 1, "name": 1, "district": 1, "cuisine": 1 }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//4)
app.get('/getWithoutID2', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({}).project({ "_id": 0, "id": 1, "name": 1, "district": 1, "address.zipcode": 1 }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//5)
app.get('/getInDistrict', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": req.query.district }).project({ "_id": 0, "name": 1 }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//6)
app.get('/getInDistrictLimit5', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": req.query.district }).project({ "_id": 0, "name": 1 }).limit(5).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//7)
app.get('/getInDistrictSkip5Limit5', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": req.query.district }).project({ "_id": 0, "name": 1 }).skip(5).limit(5).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//8)
app.get('/getCoordLessThan', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "address.coord": { "$elemMatch": { "$lt": -95.754168 } } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//9)
app.get('/cuisineNotEqual', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "cuisine": { "$elemMatch": { "$ne": "American" } } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//11)
app.get('/nameStart', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "name": { "$regex": "^Wil" } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})



//11)
app.get('/nameLast', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "name": { "$regex": "ces$" } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


//12)
app.get('/nameContain', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "name": { "$regex": "Reg" } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


//13)
app.get('/dishContain', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": "Bronx", "cuisine": { "$in": ["American ", "Chinese"] } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


//14)
app.get('/14', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": { "$in": ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//15)
app.get('/15', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "district": { "$nin": ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//16)
app.get('/16', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "grades.score": {"$lte": 10}}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})



//17)
app.get('/17', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ "address.coord.1": {"$lte": 52 , "$gt" : 42 }}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})



//18)
app.get('/18', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ }).sort({"name" : 1}).project({"_id" : 0 , "name" : 1}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})



//19)
app.get('/19', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ }).sort({"name" : -1}).project({"_id" : 0 , "name" : 1}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//20)
app.get('/20', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({ }).sort({"cuisine" : 1 , "district" : -1}).project({"_id" : 0 , "cuisine" : 1 ,"district" : 1 }).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})


//21)
app.get('/21', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({'address.coord':{$type:'double'}}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})

//22)
app.get('/22', async (req, res, next) => {
  try {
    var docs = await req.DB.collection('restaurants').find({'name':{$regex:'^(Mad)'}}).project({'name':1,'district':1,'address.coord':1,'cuisine':1}).toArray();
    res.json(docs);
  } catch (err) {
    console.log(err);
  }
})




app.listen(3000);
