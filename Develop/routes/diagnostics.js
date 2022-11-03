const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json

  readFromFile("./db/diagnostics.json").then((data) =>{
    res.json(JSON.parse(data));
  })
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file

 console.log(req.body);
 
 const {isValid, erros} = req.body;

 const playload ={
  time: Date.now(),
  errow_id: uuidv4(),
  erros,
 }

 if (!isValid){
  readAndAppend(playload, "./db/diagnositics.json");
  res.json("diagnoistic inforimation is added ⚒️");
 } else {
  res.json({
    message: "Object is valid, not logging. Check fron end implementation",
    errow_id: playload.errow_id,
  })
 }

});

module.exports = diagnostics;
