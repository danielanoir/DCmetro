var express = require('express');
var app = express();
var http = require('http').Server(app);
var config = require('../config/uber_config');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var data = new String();
var json = new Object();
var connection = new Connection(config.db)

connection.on('connect', function(err) {
  console.log("Connected");
});

app.set("view engine", "hbs");

app.get("/index", function(req, res){
  res.render("views/index.hbs");
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.listen(5000, function() {
  console.log("listening on 5000");
});

app.get("/coordinates", function(req, res){
  connection = new Connection(config.db);
  connection.on('connect', function(err) {
      console.log("Connected for GET");
        getSqlData(connection, function(err, json) {
      res.send(json);
    });
  });
});


function getSqlData(connection, callback) {
  var sql = "select station, x, y from mtr.coordinates for json path"
  var request = new Request(sql, function(err, rowCount) {
    if (err) {
      return callback(err);
    }
    json = JSON.parse(data);
    callback(null, json)
    json = {};
    connection.close();
  });
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          data += column.value;
      });
  });
connection.execSql(request);
}
