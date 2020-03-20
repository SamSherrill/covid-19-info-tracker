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

  // var countries = [{
  //    countryCode: "US",
  //    countryName: "USA",
  //    countryColor: blue, // Would this need to be a "STRING"?
  //  }, {
  //    countryCode: "IR",
  //    countryName: "Iran",
  //    countryColor: dark green, // check color
  //  }, {
  //    countryCode: "KR",
  //    countryName: "South Korea",
  //    countryColor: purple, // check color
  //  }, {
  //    countryCode: "IT",
  //    countryName: "Italy",
  //    countryColor: green,
  //  }, {
  //    countryCode: "GB",
  //    countryName: "United Kingdom",
  //    countryColor: dark blue, // check color
  //  }, {
  //    countryCode: "DE",
  //    countryName: "Germany",
  //    countryColor: dark red, // check color
  //  }, {
  //    countryCode: "FR",
  //    countryName: "France",
  //    countryColor: light purple, // real color in styling?
  //  }, {
  //    countryCode: "ES",
  //    countryName: "Spain",
  //    countryColor: red,
  //  }, {
  //    countryCode: "CN",
  //    countryName: "China",
  //    countryColor: brown,
  //  }, {
  //    countryCode: "JP",
  //    countryName: "Japan",
  //    countryColor: black,
  // }]

  // EXAMPLE FOR LOOP for running ajax for each country, then storing their data
  // for (n=0; n<countryCode.length; n++) {
  // ajax code run for each country
  // Stores a new var which = an object with the following info:
  // {
  //   label: 'Country Name' OR 'Country Code',
  //   data: y, (This is reported cases of COVID-19 for a given day)
  //   fill: false, (we don't want to fill in the space under the line)
  //   borderColor: 'orange', (We'll want to change the color for each country. 
  //    --> Maybe make a new array with colors for each country? Maybe make the countryCode array an array of objects, with color being assigned to each country in there?
  //    --> Honestly, it's probably easier to just have 2 arrays for hard coding, but future-ready code would probably mean an array of objects,
  //    --> with each object being a different country. That country object would at minimum include the country code, and the color of that country's line.)
  //   borderWidth: 1 (Same for each. Sam will play around with different widths.)
  // }
  // }

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

  // DRY - display all 10 majorly affected countries to graph

  // The example from chartjs.org as a var, but we don't use that var anywhere. Works fine with var deleted.
  // var virusLineGraph = new Chart(canvasForChart, {
  function lineGrapher(x, y) {
    var virusLineGraph = new Chart(canvasForChart, {
      type: "line",
      data: {
        labels: x,
        datasets: [

          {
            label: 'Test 1',
            data: y,
            fill: false,
            borderColor: 'orange',
            borderWidth: 5
          }, {
            label: 'Test 2',
            data: [10, 100, 200, 300, 400, 500, 600, 1000, 10000],
            fill: false,
            borderColor: 'magenta',
            borderWidth: 1
          }
        ]
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

// Chart.JS example of 2 lines on the same graph:

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