$(function () {
  // minimize and maximize left bar size
  $(".minimizeIconBtn").click(function () {
    $(".leftSec").toggleClass("shrink");
  });
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["", 165, 938, 522, 998, 450, 614.6],
    ["", 135, 1120, 599, 1268, 288, 682],
    ["", 157, 1167, 587, 807, 397, 623],
    ["", 139, 1110, 615, 968, 215, 609.4],
  ]);

  var options = {
    seriesType: "bars",
  };
  var chart = new google.visualization.ComboChart(
    document.getElementById("chartsec1")
  );
  chart.draw(data, options);
}

// data chart1

window.onload = function () {
  var totalVisitors = 883000;
  var visitorsData = {
    "New vs Returning Visitors": [
      {
        click: visitorsChartDrilldownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "New vs Returning Visitors",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
          { y: 519960, name: "New Visitors", color: "#E7823A" },
          { y: 363040, name: "Returning Visitors", color: "#546BC1" },
        ],
      },
    ],
   
  };

  var newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: "light2",
    
    legend: {
      fontFamily: "calibri",
      fontSize: 14,
      itemTextFormatter: function (e) {
        return (
          e.dataPoint.name +
          ": " +
          Math.round((e.dataPoint.y / totalVisitors) * 100) +
          "%"
        );
      },
    },
    data: [],
  };

  var visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      labelFontColor: "#717171",
      lineColor: "#a2a2a2",
      tickColor: "#a2a2a2",
    },
    axisY: {
      gridThickness: 0,
      includeZero: false,
      labelFontColor: "#717171",
      lineColor: "#a2a2a2",
      tickColor: "#a2a2a2",
      lineThickness: 1,
    },
    data: [],
  };

  newVSReturningVisitorsOptions.data =
    visitorsData["New vs Returning Visitors"];
  $(".piChart1").CanvasJSChart(newVSReturningVisitorsOptions);
  $(".piChart2").CanvasJSChart(newVSReturningVisitorsOptions);
  $(".piChart3").CanvasJSChart(newVSReturningVisitorsOptions);

  function visitorsChartDrilldownHandler(e) {
    e.chart.options = visitorsDrilldownedChartOptions;
    e.chart.options.data = visitorsData[e.dataPoint.name];
    e.chart.options.title = { text: e.dataPoint.name };
    e.chart.render();
    // $("#backButton").toggleClass("invisible");
  }
};
