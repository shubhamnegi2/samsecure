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
