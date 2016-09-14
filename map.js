$(document).ready(function() {

console.log("hi");
var data = [[5,3], [10,17], [15,4], [2,8]];

    var margin = {top: 20, right: 15, bottom: 60, left: 60}
      , width = 960 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);

    var y = d3.scale.linear()
    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
    	      .range([ height, 0 ]);

    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);
});

// JSONData = [
// [679,829],[180,767],[421,1060],[798,1192],[947,983],[269,648],[903,456],[401,637],[178,647],[632,878],[548,140],[976,713],[821,826],[246,697],[388,1092],[579,907],[811,1025],[1137,348],[1074,608],[120,744],[1063,366],[762,605],[798,1113],[856,784],[321,1165],[513,687],[731,269],[356,1129],[976,799],[974,1014],[1022,599],[654,350],[657,414],[975,753],[1267,758],[1109,376],[939,439],[855,740],[1304,597],[1158,645],[766,688],[490,991],[728,751],[269,670],[1340,598],[1239,728],[857,546],[732,177],[916,685],[742,62],[455,1025],[224,721],[1029,1068],[798,1234],[821,908],[856,689],[557,922],[492,64],[897,934],[798,1155],[628,752],[764,641],[908,546],[633,749],[689,799],[742,121],[999,572],[325,636],[699,796],[223,648],[1184,670],[683,299],[465,635],[1029,387],[786,869],[1003,1040],[655,852],[432,637],[1212,700],[956,564],[1238,601],[976,837],[1165,317],[732,229],[523,956],[1205,601],[368,635],[589,505],[857,639],[1005,411],[1273,597]]
