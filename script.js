$(document).ready(function () {
    console.log("ready!");

    

    var queryURLTracker = "https://thevirustracker.com/free-api?"; 
    $.ajax({
        url: queryURLTracker,
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });
    });