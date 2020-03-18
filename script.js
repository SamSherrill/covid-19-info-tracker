$(document).ready(function() {
  console.log("ready!");

  // var countryCode = [
  //   "AF",
  //   "AL",
  //   "DZ",
  //   "AO",
  //   "AR",
  //   "AM",
  //   "AU",
  //   "AT",
  //   "AZ",
  //   "BS",
  //   "BD",
  //   "BY",
  //   "BE",
  //   "BZ",
  //   "BJ",
  //   "BT",
  //   "BO",
  //   "BA",
  //   "BW",
  //   "BR",
  //   "BN",
  //   "BG",
  //   "BF",
  //   "BI",
  //   "KH",
  //   "CM",
  //   "CA",
  //   "CI",
  //   "CF",
  //   "TD",
  //   "CL",
  //   "CN",
  //   "CO",
  //   "CG",
  //   "CD",
  //   "CR",
  //   "HR",
  //   "CU",
  //   "CY",
  //   "CZ",
  //   "DK",
  //   "DP",
  //   "DJ",
  //   "DO",
  //   "CD",
  //   "EC",
  //   "EG",
  //   "SV",
  //   "GQ",
  //   "ER",
  //   "EE",
  //   "ET",
  //   "FK",
  //   "FJ",
  //   "FI",
  //   "FR",
  //   "GF",
  //   "TF",
  //   "GA",
  //   "GM",
  //   "GE",
  //   "DE",
  //   "GH",
  //   "GR",
  //   "GL",
  //   "GT",
  //   "GN",
  //   "GW",
  //   "GY",
  //   "HT",
  //   "HN",
  //   "HK",
  //   "HU",
  //   "IS",
  //   "IN",
  //   "ID",
  //   "IR",
  //   "IQ",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   ""
  // ];

  // var queryURLTracker = "https://thevirustracker.com/free-api?global=stats";
  // $.ajax({
  //   url: queryURLTracker,
  //   dataType: "json",
  //   success: function(data) {
  //     console.log(data);
  //     console.log(data);
  //   }
  // });

  // var queryURLTracker =
  //   "https://thevirustracker.com/free-api?countryTotal=" + countryCode;
  // $.ajax({
  //   url: queryURLTracker,
  //   dataType: "json",
  //   success: function(data) {
  //     console.log(data);
  //     console.log(data);
  //   }
  // });

  // var queryURLTracker = "https://thevirustracker.com/timeline/map-data.json";
  // $.ajax({
  //   url: queryURLTracker,
  //   dataType: "json",
  //   success: function(data) {
  //     console.log(data);
  //     console.log(data);
  //   }
  // });

  // var queryURLTracker =
  //   "https://thevirustracker.com/free-api?countryTimeline=" + countryCode;
  // $.ajax({
  //   url: queryURLTracker,
  //   dataType: "json",
  //   success: function(data) {
  //     console.log(data);
  //     console.log(data);
  //   }
  // });

  var queryURLTracker =
    "https://thevirustracker.com/free-api?countryTimeline=US";
  $.ajax({
    url: queryURLTracker,
    dataType: "json",
    success: function(data) {
      console.log(data.timelineitems["0"]); 
      console.log(data); 
      var timelineData = data.timelineitems["0"]; 
      var x = []; 
      var y = []; 
      // var ength = keys.length; 
      for (i=0; i<57; i++) {
        var keys = Object.keys(timelineData)
        x += keys[i] + " "; 
        y += timelineData[Object.keys(timelineData)[i]].total_cases + " "; 
      }
      console.log(x); 
      console.log(y); 
      console.log(keys.length); 
    }
  });
});
