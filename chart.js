$(function () {

  $.ajax({
    url: "http://localhost:5000/coordinates",
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
            data:  [ [679,829],[180,767],[421,1060],[798,1192],[947,983],[269,648],[903,456],[401,637],[178,647],[632,878],[548,140],[976,713],[821,826],[246,697],[388,1092],[579,907],[811,1025],[1137,348],[1074,608],[120,744],[1063,366],[762,605],[798,1113],[856,784],[321,1165],[513,687],[731,269],[356,1129],[976,799],[1022,599],[654,350],[657,414],[975,753],[1267,758],[1109,376],[939,439],[855,740],[1304,597],[1158,645],[766,688],[490,991],[728,751],[269,670],[1340,598],[1239,728],[732,177],[916,685],[742,62],[455,1025],[224,721],[1029,1068],[798,1234],[821,908],[856,689],[557,922],[492,64],[897,934],[798,1155],[628,752],[764,641],[908,546],[633,749],[689,799],[742,121],[999,572],[325,636],[699,796],[223,648],[1184,670],[683,299],[465,635],[1029,387],[786,869],[1003,1040],[655,852],[432,637],[1212,700],[956,564],[1238,601],[976,837],[1165,317],[732,229],[523,956],[1205,601],[368,635],[589,505],[857,639],[1005,411],[1273,597]
          ]

        }, {
            name: 'Uber Pool',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [180.3, 83.2], [180.3, 83.2]]
        }]
    });
});
