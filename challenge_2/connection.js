var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
//   if (err) throw err

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })

module.exports.db = MongoClient;