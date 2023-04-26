const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // Schema goes here
  word: { type: String, unique: true },
  description: String
})

let Glossary = mongoose.model('Glossary', glossarySchema);

let save = (newWord) => {
  return Glossary.create(newWord);
}

let getAll = () => {
  return Glossary.find({})
    .sort('-word')
    .exec()
}

// 3. Export the models
module.exports.save = save;
module.exports.getAll = getAll

// 4. Import the models into any modules that need them


