$(document).ready(function() {

function printMousePos(event) {
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;
}
document.addEventListener("click", printMousePos);

data = [
  //red line starting at Shady Grove
[322, 130], [356 ,162], [388, 198], [420, 232], [454, 265], [489, 300], [526, 332], [556, 366], [582, 384], [613, 387], [633, 407], [656, 432], [682, 455], [700, 486], [765, 590], [855, 594], [914, 591], [979, 566], [978, 526], [978, 486], [978, 449], [900, 354], [814, 268], [800, 176], [800, 138], [797, 103], [800, 65],
//yellow and green starting at greenbelt
[1026, 220], [1000, 253], [975, 280], [944, 305], [822, 380], [786, 417], [819, 455], [858, 496], [858, 542], [856, 640], [858, 712],
//green only waterfront to branch
 [907, 835], [943, 835], [1005, 859], [1032, 883], [1065, 900], [1112, 895], [1140, 923], [1167, 952],
//yellow and blue starting at pentagon
[656, 861], [656, 917], [681, 969], [728, 996], [728, 1036], [733, 1084], [548, 1125], [492, 1200],
//yellow eisenhower to huntington
[742, 1145], [742, 1197],
//arlington cemetery
[594, 766],
//silver oange and blue from east falls church to stadium-armory
[328, 643], [369, 644], [401, 644], [433, 644], [464, 644], [516, 593], [628, 533], [665, 533], [730, 530], [766, 642], [766, 672], [909, 713], [957, 713], [1002, 705], [1026, 677], [1077, 670],
//blue and silver benning to largo
[1206, 681], [1240, 681], [1273, 681], [1305, 680], [1340, 680],
//orange vienna, dun, west falls
[179, 634], [225, 634], [266, 634],
//orange minnesota to new carrlton
[1157, 638], [1188, 608], [1215, 577], [1241, 555], [1270, 526],
//silver wiehle to mclean
[182, 515], [200, 541], [224, 556], [249, 584], [269, 606]
];

    var margin =
    {top: 0, right: 0, bottom: 0, left: 0}, width = 1400, height = 1300;

    var x = d3.scale.linear()

    var y = d3.scale.linear()

    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);

});
