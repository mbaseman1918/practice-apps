require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save, remove } = require('./db.js')
const bodyParser = require('body-parser')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/glossary', function(req, res) {
  //save word and description to the db
  console.log('Server got a POST request!', req.body)
})

app.get('/glossary', function(req, res) {
  //get all words and descriptions
  console.log('Server got a GET request!', req.body)
})

app.delete('/glossary', function(req, res) {
  //delete target word from db
  console.log('Server got a DELETE request!')
})

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`Listening at http://localhost:${port}`)
});
