var app = require('express')();
var http = require('http').Server(app);
var config = require('../config/uber_config');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
  console.log("listening on 3000");
})

var connection = new Connection(config.db);
connection.on('connect', function(err) {
// If no error, then good to proceed.
   console.log("Connected");
   // testInsert();
   testSelect();
});

  function testSelect() {
    request = new Request("select * from ubr.person", function(err) {
    if (err) {
        console.log(err);}
    });
    var result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            result+= column.value + " ";
          }
        });
        console.log(result);
        result ="";
    });

    request.on('done', function(rowCount, more) {
    console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
  }
