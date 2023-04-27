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
  return new Glossary(newWord).save();
}

let getAll = () => {
  return Glossary.find({})
    .sort('word')
    .exec()
}

let remove = (targetWord) => {
  console.log('This is the targetWord', targetWord);
  return Glossary.deleteOne({ word: targetWord})
}

let update = (update) => {
  console.log('This is the target word', update.word);
  return Glossary.findOneAndReplace({word: update.word}, update)
}

// 3. Export the models
module.exports.save = save;
module.exports.getAll = getAll
module.exports.remove = remove
module.exports.update = update

// 4. Import the models into any modules that need them


