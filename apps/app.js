$(function(){
    $('#search-term').submit(function(event){
      event.preventDefault();
      var searchTerm = $('#query').val();
      alert(searchTerm);
      getRequest(searchTerm);
    });
  });

    function getRequest(searchTerm){
      var params = {
      part:'snippet',
      key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
      q: searchTerm,
     }
     url = 'https://www.googleapis.com/youtube/v3/search';

     $.getJSON(url, params, function(data){
        console.log(data.items);
        showResults(data.items);
      })
    }

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.snippet.title + '</p> <a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"/></a>';
    console.log(value.snippet.title);

  });
  $('#search-results').html(html);
}