let express = require('express');
let app = express();
const dotenv=require("dotenv");
 dotenv.config({path:"sample.env"})  let bodyParser = require("body-parser");
let mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  /*
app.use(bodyParser.urlencoded({extended: false}))
  

app.use("/public", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}))
/*

app.use((req, res, next)=> {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})*/


/*app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({
 "message" : "HELLO JSON"})}
  else{
    res.json({"message":"Hello json"})}
})*/

/*app.get("/now",
  (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    // accessing the newly added property
    // in the main function
    res.json({"time": req.time})
  }
);
   
/*             

app.get("/:word/echo", (req,res)=>{
  res.json({echo: req.params.word});
})

app.get("/name", (req,res)=>{
    res.json({name:req.query.first + " " + req.query.last})
})

app.post("/name", (req,res)=>{
    res.json({name:req.body.first + " " + req.body.last})})   
    
  
*/






















module.exports = app;





















































let mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let Person;

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
