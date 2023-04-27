require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save, remove, update } = require('./db.js')
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
  console.log('POST Requst')
  save(req.body)
    .then((response) => {
      res.status(201).send(response)
    });
})

app.get('/glossary', function(req, res) {
  //get all words and descriptions
  console.log('GET Request received')
  getAll()
    .then((data) => {
      res.send(data)
    })
})

app.delete('/glossary', function(req, res) {
  //delete target word from db
  console.log('Server got a DELETE request!', req.body)
  remove(req.body.word)
    .then((response) => {
      res.send(response)
    })
})

app.put('/glossary', function(req, res) {
  console.log('server got a PUT request!', req.body)
  update(req.body)
    .then(() => {
      getAll()
        .then((data) => {
          res.send(data)
        })
    })
})

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`Listening at http://localhost:${port}`)
});
