$(document).ready(function() {
  console.log('ready!');

  // Display fake article title with link to DOM
  // var newArticleDiv = $("<a>")
  // newArticleDiv.attr("href", "https://www.google.com");
  // newArticleDiv.html("<h4>Article Title</h4>")

  // $("#article-space").append(newArticleDiv);

  // connect to API & pull data
  // for loop to post 3 articles
  var keyWord = [
    'covid-19-coronavirus',
    'coronavirus-origin',
    'covid-19-Testing',
    'covid-19-symptoms',
    'how-can-i-Prepare-for-coronavirus',
    'hand-sanitizer-and-coronavirus'
  ];
  
  var queryURL =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
    keyWord[0] +
    '&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    console.log(response.response.docs[0].snippet);

    for (i = 0; i < 3; i++) {
      // will need to empty
      var newArticleLink = $('<a>');
      var newArticleSnippet = $('<p>');

      newArticleLink.attr('href', response.response.docs[i].web_url);
      newArticleLink.html(
        '<h4>' + response.response.docs[i].headline.main + '</h4>'
      );
      newArticleSnippet.text(response.response.docs[i].snippet);

      $('#article-space').append(newArticleLink);
      $('#article-space').append(newArticleSnippet);
    }
  });
});
