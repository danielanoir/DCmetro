$(document).ready(function() {

var origIdDefault = 51;
refreshData(origIdDefault);

function refreshData(origId) {

var ajaxURL = "http://localhost:5000/stations/" + origId;
$.ajax({
  url: ajaxURL,
  success: function(response){
    initializePage(response);
    },
  dataType: "json"
});

var stations = [];

function initializePage (stationJSON) {
  d3.select("svg").remove();

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
    .on("click", function(d) {
      refreshData(d.id);
      // d3.select(".selected").classed("selected", false);
      // d3.select(this).classed("selected", true);
      console.log(d.id);
    });

  var circleAttributes = circles
    .attr("id", function(d) { return d.id; })
    .attr("cx", function(d) { return d.coordX; })
    .attr("cy", function(d) { return d.coordY; })
    .attr("class", function(d) {
      if (d.id == origId) {return "selected";} else {return "";}
    })
    // .append("title").text(function(d) { return d.name; });
    .append("title").text(function(d) {
      return "$" + d.fareOff.toFixed(2).toString() + " off-peak"
      + ", $" + d.farePeak.toFixed(2).toString() + " peak"
      + " (" + d.minutes.toString() + " minutes)";
    });
  var labels = mapSpace.selectAll("text")
      .data(stations)
      .enter()
      .append("text")
      .style('fill', '#424242')
      .attr("class", function(d) {
        if (d.id == origId) {return "selectedText";}
        else {return "";}
      })

      // .attr("transform",
      // function(d) {
      //   var t = 0;
      //   switch(d.id) {
      //     case 5: t = -65; break;
      //     default: t = 0; break;
      //   }
      //   return '"rotate(' + t.toString() + ')"';
      // })
      .attr("x", function(d) {
        var r = 0;
        switch(d.id) {
          case 81: r = 0; break;
          case 82: r = -160; break;
          case 85: r = -20; break;
          case 71: r = -160; break;
          case 23: r = -120; break;
          case 15: r = -120; break;
          default: r = 35; break;
          case 24: r = -40; break;
          case 5: r = -40; break;
          case 84: r = -40; break;
          case 14: r = -40; break;
          case 19: r = -30; break;
          case 83: r = -110; break;
          case 22: r = -110; break;
          case 86: r = -110; break;
        }
        return d.coordX + r; })
      .attr("y", function(d) {
        var s = 0;
        switch(d.id) {
          case 81: s = -35; break;
          case 71: s = -35; break;
          case 24: s = 110; break;
          case 5: s = 90; break;
          case 84: s = 70; break;
          case 14: s = 50; break;
          case 83: s = 90; break;
          case 22: s = 70; break;
          case 86: s = 50; break;
          case 85: s = -30; break;
          case 82: s = 25; break;
          case 23: s = 15; break;
          case 15: s = 20; break;
          default: s = 0; break;
        }
        return d.coordY + s; })
      .attr("text-anchor", "center")
      .text(function (d) { return d.name; });

}
}
});


// function printMousePos(event) {
//   document.body.textContent =
//     "clientX: " + event.clientX +
//     " - clientY: " + event.clientY;
// }
// document.addEventListener("click", printMousePos);
