$(function(){
    $('#search-term').submit(function(event) {
      event.preventDefault();
      var searchTerm = $('#query').val();
      $('#query').val('');
      $('#search-results').html('');
      console.clear();
      getRequest(searchTerm);
    });

    function getRequest(searchTerm) {
      var params = {
      part:'snippet',
      key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
      q: searchTerm,
      maxResults: 9
    };
     url = 'https://www.googleapis.com/youtube/v3/search';

     $.getJSON(url, params, function(data) {
        console.log(data.items);
        showResults(data.items);
      })
    };

    function showResults(results) {
      var html = "";
      $.each(results, function(index,value){
        if(value.id.kind == "youtube#video"){
        html += '<div class="col-xs-12 col-md-4"><div class="video-display"><p>' + value.snippet.title + 
        '</p> <a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img class="thumbnails" src="' + 
        value.snippet.thumbnails.high.url + '"/></a></div></div>';
      } 
    });
      $('#search-results').append(html);
    };
});

