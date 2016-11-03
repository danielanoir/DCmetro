app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var config = require('./config/uber_config');
var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var data = "";
var json = {};

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

  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.get('/metromap.jpg', function(req, res) {
      res.sendFile(path.join(__dirname + '/metromap.jpg'));
  });

  app.get('/favicon.png', function(req, res) {
      res.sendFile(path.join(__dirname + '/favicon.png'));
  });

  app.get('/map.js', function(req, res) {
      res.sendFile(path.join(__dirname + '/map.js'));
  });

  app.get('/style.css', function(req, res) {
      res.sendFile(path.join(__dirname + '/style.css'));
  });

  app.get("/stations/:origId", function(req, res){
        var origId = req.params.origId;
        getSqlData(origId, function(err, json) {
        res.send(json);
      });
  });

function getSqlData(origId, callback) {
  var sql = 'mtr.getStations';
  var request = new Request(sql, function(err, rowCount) {
    if (err) {
      return callback(err);
    }
    json = JSON.parse(data);
    callback(null, json);
    data = "";
    connection.release();
  });
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          data += column.value;
      });
    });
  request.addParameter('orig_id', TYPES.Int, origId);
  connection.callProcedure(request);
  }
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.listen(process.env.PORT, function() {
  console.log("listening");
});
