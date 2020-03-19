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

  var globalStatsQuery = "http://thevirustracker.com/free-api?global=stats";
  $.ajax({
    url: globalStatsQuery,
    dataType: "json",
    method: "GET"
  }).then(function (data) {
    console.log(data);
    console.log(data.stat);
    if (data.stat === "ok") {
      console.log("Total cases of the virus: " + data.results[0].total_cases)
      console.log("New cases today: " + data.results[0].total_new_cases_today)
      $("#data-test").text("Total Cases of the Virus: " + data.results[0].total_cases);
    }
  });

  var countryStatsQuery =
    "http://thevirustracker.com/free-api?countryTotal=" + countryCode[0];
  $.ajax({
    url: countryStatsQuery,
    dataType: "json",
    method: "GET"
  }).then(function (data) {
    var countryInfo = data.countrydata[0];
    console.log(data);
    console.log("Name of this country: " + countryInfo.info.title);
    console.log("Total cases in this country: " + countryInfo.total_cases);
    console.log("New cases today: " + countryInfo.total_new_cases_today);
  });

  var queryURLTracker =
    "http://thevirustracker.com/free-api?countryTimeline=" + countryCode[0];
  $.ajax({
    url: queryURLTracker,
    dataType: "json",
    success: function (data) {
      console.log(data.timelineitems["0"]);
      console.log(data);
      var timelineData = data.timelineitems["0"];
      var x = [];
      var y = [];
      var keys = Object.keys(timelineData);
      var virusDuration = keys.length
      for (i = 0; i < virusDuration - 1; i++) {
        x.push(keys[i]);
        y.push(timelineData[Object.keys(timelineData)[i]].total_cases);
      }
      console.log(x);
      console.log(y);
      console.log(keys.length);
      console.log(Array.isArray(x));
      console.log(Array.isArray(y));
    }
  });

  // The chart below is shown on the <canvas> tag in index.html, commented below.
  // <canvas id="data-space"></canvas>
  var canvasForChart = document.getElementById("data-space").getContext("2d");
  
  var dataTestSetX = [];
  var dataTestSetY = [];
  for (i = 0; i < 21; i++) {
    dataTestSetX.push(i);
    dataTestSetY.push(i);
  }



  var myLineChart = new Chart(canvasForChart, {
    type: "line",
    data: {
      labels: dataTestSetX,
      datasets: [{
        label: 'Simple Test Line',
        data: dataTestSetY,
        backgroundColor: 'magenta',
        borderColor: 'orange',
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
});