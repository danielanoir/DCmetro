var express = require('express');
var app = express();
var http = require('http').Server(app);
var config = require('../config/uber_config');
// var Connection = require('tedious').Connection;
var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var data = new String();
var json = new Object();
// var connection = new Connection(config.db)

var poolConfig = {
  min: 2,
  max: 4,
  log: true
};

var pool = new ConnectionPool(poolConfig, config.db);
pool.on('error', function(err) {
  console.error(err);
});

pool.acquire(function(err, connection) {
  if (err) {
    console.err(err);
    return;
  }

  app.get("/coordinates", function(req, res){
          getSqlData(function(err, json) {
        res.send(json);
      });
  });

function getSqlData(callback) {
  var sql = 'select station, x, y from mtr.coordinates for json path'
  var request = new Request(sql, function(err, rowCount) {
    if (err) {
      return callback(err);
    }
    json = JSON.parse(data);
    callback(null, json)
    data = "";
    // console.log('rowCount: ' + rowCount);
    connection.release();
  });
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          data += column.value;
      });
    });
  connection.execSql(request);
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.listen(5000, function() {
  console.log("listening on 5000");
});
