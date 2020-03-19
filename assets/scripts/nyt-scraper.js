var keyWord = [
  'covid-19-coronavirus',
  'coronavirus-origin',
  'covid-19-Testing',
  'covid-19-symptoms',
  'how-can-i-Prepare-for-coronavirus',
  'hand-sanitizer-and-coronavirus'
];
var selectedKeyword = keyWord[0];
var queryURLGlobal =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
  selectedKeyword +
  '&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M';

function getKeyword(index = 0) {
  console.log(index, 'index');
  console.log(keyWord[index]);
  var updatedURL = buildQueryURL(keyWord[index]);
  console.log(updatedURL);
  displayData(updatedURL);
}

function buildQueryURL(topic = '') {
  return (
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
    topic +
    '&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M'
  );
}

function displayData(queryURL = selectedKeyword) {
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    $('#article-space').html('');
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
}
console.log(selectedKeyword);

$(document).ready(function() {
  console.log('ready!');

  var queryURL =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
    selectedKeyword +
    '&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M';
  displayData(queryURL);
});
