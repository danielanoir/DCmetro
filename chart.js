$(function () {

  $.ajax({
    url: "http://localhost:5000/index",
    success: function(response){
      console.log(response);
      },
    dataType: "json"
  });

    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            backgroundColor: 'transparent',
            plotBackgroundImage: 'metromap.jpg',
        },
        title: {
            text: 'Metro versus Uber Pool Costs'
        },
        xAxis: {
          min: 0,
          max: 1400,
          lineWidth: 0,
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: 'transparent',
          labels: {
            enabled: false
          },
          minorTickLength: 0,
          tickLength: 0,
          title: {
              enabled: false
            }
        },
        yAxis: {
          min: 0,
          max: 1259,
          lineWidth: 0,
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: 'transparent',
          labels: {
            enabled: false
          },
          minorTickLength: 0,
          tickLength: 0,
          title: {
              enabled: false
            }
        },
        legend: {
            enabled: false
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    // pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Metro',
            color: 'rgba(223, 83, 83, .5)',
            data: [[1273, 597], [1005, 411], [857, 639], [589, 505], [368, 635], [1205, 601], [523, 956], [732, 229], [1165, 317], [976, 837], [1238, 601]]
        }, {
            name: 'Uber Pool',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [180.3, 83.2], [180.3, 83.2]]
        }]
    });
});
