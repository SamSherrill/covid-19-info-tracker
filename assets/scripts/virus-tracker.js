// Country List: USA, Iran, South Korea, Italy, UK, Germany, France, Spain, China, Japan

var countryCode = ["US", "IR", "KR", "IT", "GB", "DE", "FR", "ES", "CN", "JP"]
// var currentCountry = 0;
// var countryTimelineQuery =
// "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=" + countryCode[currentCountry];

// Then call & pass in like this ---> displayCountry(countryTimelineQuery);
// At startup that will display the USA's COVID-19 graph, but we can then change currentCountry everytime the drop down changes,
// and re-run displayCountry(countryTimelineQuery);

// $(#OUR DROP DOWN).on("state-change", function to change currentCountry)
// call displayCountry() again

$(document).ready(function() {
  console.log("ready!");
  displayCountry(0);
});

function displayCountry(currentCountry) {
  var countryTimelineQuery =
    "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=" + countryCode[currentCountry];
  $.ajax({
    url: countryTimelineQuery, 
    dataType: "json",
    method: "GET"
  })
    .then(function(data) {
      var timelineData = data.timelineitems["0"];
      var x = [];
      var y = [];
      var keys = Object.keys(timelineData);
      var virusDuration = keys.length;
      for (i = 0; i < virusDuration - 1; i++) {
        x.push(keys[i]);
        y.push(timelineData[Object.keys(timelineData)[i]].total_cases);
      }
      lineGrapher(x, y, data);
    })
    .catch(function(err) {
      console.error(err);
    });
}

// The chart below is shown on the <canvas> tag in index.html, commented below.
// <canvas id="data-space"></canvas>
var canvasForChart = document.getElementById("data-space").getContext("2d");

function lineGrapher(x, y, data) {
  var countryTitle = data.countrytimelinedata[0].info.title;
  new Chart(canvasForChart, {
    type: "line",
    data: {
      labels: x,
      datasets: [
        {
          label: countryTitle,
          data: y,
          fill: false,
          borderColor: "black",
          borderWidth: 5
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
