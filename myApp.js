require('dotenv').config();
const mongoose = require('mongoose');
const myID = "mongodb+srv://Rajat117:HxMworL8J1b9ZQ1C@cluster0.fvghyb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(myID, { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=> {
  console.log("connected",data.id);
});


const personSchema = new mongoose.Schema({
name : {
  type:String,
  isRequired : true
},
age: Number,
favouriteFoods: [{type: String}]
});

let Person = mongoose.model("Person",personSchema);
const createAndSavePerson =async (done) => {
  let newPerson = new Person({
    name:"Rahul",
    age: 21,
    favouriteFoods: ["Samosa"]
  })
 
 let createdPerson =await newPerson.save();

  done(null, createdPerson);
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
