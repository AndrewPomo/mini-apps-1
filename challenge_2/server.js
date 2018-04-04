var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./connection');
var app = express();

class Server {
  init() {
    var context = this;
    app.use(express.static(__dirname + '/client'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, './client', 'index.html'))
    });

    app.post('/', function (req, res) {
      context.getValues(req.body, function(csv) {
        res.send(csv)
      })
    })

    app.listen(3000, () => console.log('Listening on port 3000!'))
  }
}

class CsvMachine extends Server{
  getValues(JSON, callback) {
    var firstKeys = Object.keys(JSON);
    firstKeys.splice(firstKeys.indexOf('children'), 1, 'parent')
    var csv = 'id, ' + firstKeys.join(', ') + '<br>';
    var auto = 1

    var getVals = (json, parent) => {
      var nextLine = auto.toString() + ', ';
      for (var key in json) {
        for (var i = 0; i < firstKeys.length; i++) {
          if (key === firstKeys[i]) {
            nextLine += json[key] + ', ';
          }
        }
      }

      nextLine += parent
      parent === null ? parent = 1 : parent++;
      nextLine += '<br>';
      csv += nextLine;
      auto++;

      if (json.children) {
        for (var i = 0; i < json.children.length; i++) {
          getVals(json.children[i], parent);
        }
      }
    }

    getVals(JSON, null)
    csv = csv.slice(0, -4)
    callback(csv)
  }

  formatValuesToCSV(values, callback) {
    var csv = values.keys.join(',')
    delete values.keys
  }
}

var csvMachine = new CsvMachine();
csvMachine.init()

