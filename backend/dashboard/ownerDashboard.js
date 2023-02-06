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

  // pie chart2
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Customer", "Mhl"],
      ["Customer", 44.4],
      ["Customer", 23.9],
      ["Customer", 14.5],
    ]);

    var options = {
      title: "",
      is3D: true,
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("piCarts1")
    );
    chart.draw(data, options);
  }
};



am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
    })
  );

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15,
  });

  xRenderer.grid.template.setAll({
    location: 1,
  });

  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1,
      }),
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
      }),
    })
  );

  series.columns.template.setAll({
    cornerRadiusTL: 5,
    cornerRadiusTR: 5,
    strokeOpacity: 0,
  });
  series.columns.template.adapters.add("fill", function (fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  series.columns.template.adapters.add("stroke", function (stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  // Set data
  var data = [
    {
      country: "USA",
      value: 2025,
    },
    {
      country: "China",
      value: 1882,
    },
    {
      country: "Japan",
      value: 1809,
    },
    {
      country: "Germany",
      value: 1322,
    },
    {
      country: "UK",
      value: 1122,
    },
    {
      country: "France",
      value: 1114,
    },
    {
      country: "India",
      value: 984,
    },
    {
      country: "Spain",
      value: 711,
    },
    {
      country: "Netherlands",
      value: 665,
    },
    {
      country: "South Korea",
      value: 443,
    },
    {
      country: "Canada",
      value: 441,
    },
  ];

  xAxis.data.setAll(data);
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
});