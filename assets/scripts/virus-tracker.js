$(document).ready(function () {
  // Country List: USA, Iran, South Korea, Italy, UK, Germany, France, Spain, China, Japan
  var countryCode = [
    "US",
    "IR",
    "KR",
    "IT",
    "GB",
    "DE",
    "FR",
    "ES",
    "CN",
    "JP"
  ];

  // Special Note: we'll want to try to minimize the use of ajax for the sake of performance;
  // consider adding a submit button that actually runs the whole graph update, rather than dynamically
  // re-generating the DOM on each button press.
  // Currently, all 3 of these are running on page load, and they print based upon run speed, not order

  // var globalStatsQuery =
  //   "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?global=stats";
  // $.ajax({
  //     url: globalStatsQuery,
  //     dataType: "json",
  //     method: "GET"
  //   })
  //   .then(function (data) {
  //     if (data.stat === "ok") {
  //     }
  //   })
  //   .catch(function (err) {
  //     console.error(err);
  //   });

  // var countryStatsQuery =
  //   "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTotal=" +
  //   countryCode[0];
  // $.ajax({
  //     url: countryStatsQuery,
  //     dataType: "json",
  //     method: "GET"
  //   })
  //   .then(function (data) {
  //     var countryInfo = data.countrydata[0];
  //   })
  //   .catch(function (err) {
  //     console.error(err);
  //   });

  var countryTimelineQuery =
    "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=" +
    countryCode[0];
  $.ajax({
      url: countryTimelineQuery,
      dataType: "json",
      method: "GET"
    }).then(function (data) {
      // console.log("==========inside countryTimelineQuery ===========");

      var timelineData = data.timelineitems["0"];
      var x = [];
      var y = [];
      var keys = Object.keys(timelineData);
      var virusDuration = keys.length;

      for (i = 30; i < virusDuration - 1; i++) {
        x.push(keys[i]);
        y.push(timelineData[Object.keys(timelineData)[i]].total_cases);
      }

      lineGrapher(x, y); 

      // The example from chartjs.org as a var, but we don't use that var anywhere. Works fine with var deleted.
      // var virusLineGraph = new Chart(canvasForChart, {


    })
    .catch(function (err) {
      console.error(err);
    });

  // The chart below is shown on the <canvas> tag in index.html, commented below.
  // <canvas id="data-space"></canvas>
  var canvasForChart = document.getElementById("data-space").getContext("2d");

  // PSEUDO CODE 3/20 MORNING:
  // Link data to graph
  // create dropdown
  // Dropdown selects correct country data from resource

  // The example from chartjs.org as a var, but we don't use that var anywhere. Works fine with var deleted.
  // var virusLineGraph = new Chart(canvasForChart, {
  function lineGrapher(x, y) {
    var virusLineGraph = new Chart(canvasForChart, {
      type: "line",
      data: {
        labels: x,
        datasets: [{
          label: 'Test 1',
          data: y,
          fill: false,
          borderColor: 'orange',
          borderWidth: 1
        }, {
          label: 'Test 2',
          data: [10, 100, 200, 300, 400, 500, 600, 1000, 10000],
          fill: false,
          borderColor: 'magenta',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
});

// var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// 		var config = {
// 			type: 'line',
// 			data: {
// 				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 				datasets: [{
// 					label: 'My First dataset',
// 					backgroundColor: window.chartColors.red,
// 					borderColor: window.chartColors.red,
// 					data: [
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor()
// 					],
// 					fill: false,
// 				}, {
// 					label: 'My Second dataset',
// 					fill: false,
// 					backgroundColor: window.chartColors.blue,
// 					borderColor: window.chartColors.blue,
// 					data: [
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor(),
// 						randomScalingFactor()
// 					],
// 				}]
// 			},
// 			options: {
// 				responsive: true,
// 				title: {
// 					display: true,
// 					text: 'Chart.js Line Chart'
// 				},
// 				tooltips: {
// 					mode: 'index',
// 					intersect: false,
// 				},
// 				hover: {
// 					mode: 'nearest',
// 					intersect: true
// 				},
// 				scales: {
// 					xAxes: [{
// 						display: true,
// 						scaleLabel: {
// 							display: true,
// 							labelString: 'Month'
// 						}
// 					}],
// 					yAxes: [{
// 						display: true,
// 						scaleLabel: {
// 							display: true,
// 							labelString: 'Value'
// 						}
// 					}]
// 				}
// 			}
// 		};