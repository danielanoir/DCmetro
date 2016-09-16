$(document).ready(function() {

$.ajax({
  url: "http://localhost:5000/stations",
  success: function(response){
    initializePage(response);
    },
  dataType: "json"
});

var stations = [];

function initializePage (stationJSON) {
  for (var topLevel in stationJSON) {
    for (var objectKey in stationJSON[topLevel]) {
    stations.push(stationJSON[topLevel][objectKey].Station);
    }
  }

  var mapSpace = d3.select('body')
    .append('svg')
    .attr('width', 1400)
    .attr('height', 1300)
    .attr('id', 'mapSpace');

  var circles = mapSpace.selectAll("circle")
    .data(stations)
    .enter()
    .append("circle")


  var circleAttributes = circles
    .attr("cx", function(d) { return d.coordX; })
    .attr("cy", function(d) { return d.coordY; })
    .append("title").text(function(d) { return d.name; });


  }
});


// var labels = mapSpace.selectAll("text")
//     .data(stations)
//     .enter()
//     .append("text");
//
// var labelAttributes = labels
//     .attr("x", function(d) { return d.coordX + 20; })
//     .attr("y", function(d) { return d.coordY; })
//     .attr("text-anchor", "left")
//     .text(function (d) { return d.name; });

// function printMousePos(event) {
//   document.body.textContent =
//     "clientX: " + event.clientX +
//     " - clientY: " + event.clientY;
// }
// document.addEventListener("click", printMousePos);
