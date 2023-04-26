const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // Schema goes here
  word: {type: String, unique: true},
  description: String
})

let Glossary = mongoose.model('Glossary', glossarySchema);

let save = (newWord) => {
  console.log('This is what is getting loaded to the DB', newWord)
  return new Glossary(newWord).save();
}

let getAll = () => {
  return Glossary.find({})
    .sort('-word')
    .exec()
}

let remove = (targetWord) => {
  return Glossary.deleteOne({ word: targetWord})
}

// 3. Export the models
module.exports.save = save;
module.exports.getAll = getAll
module.exports.remove = remove

// 4. Import the models into any modules that need them


