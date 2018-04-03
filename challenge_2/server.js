var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var handleJSON = function(JSON, callback) {
  var keys = Object.keys(JSON);
  // keys = the first line of the csv

  function getVals() {

    for (var keys in JSON) {

    }
  }

  getVals(JSON)
  
  callback(JSON)
}

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client', 'index.html'))
});

app.post('/', function (req, res) {
  handleJSON(req.body, function(csv) {
    res.send(csv)
  })
})

app.listen(3000, () => console.log('Listening on port 3000!'))


// You may assume the JSON data has a regular structure and hierarchy (see included sample file). 

// The server must flatten the JSON hierarchy, mapping each item in the JSON to a single line of CSV report (see included sample output). 

// You may assume child records in the JSON will always be in a property called children but you may not assume a JSON record has any other specific properties; 
// i.e. any properties that exist besides children must be mapped to a column in your CSV report.

// var CSVify = function (stringiFied) {

// }