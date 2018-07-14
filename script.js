
jQuery(document).ready(function($){
    $("a.transmissionState").click(function(){
      $("a.transmissionState").removeClass("activeButton");
      $(this).addClass("activeButton");
    });
});


function querySearchFromNapsterApi(){
let bottom_bar_song_name = document.getElementById("bottom_player_song_name");
let para_track_name = document.getElementById("paragraph_track_name");
let para_preview_url = document.getElementById("paragraph_preview_url");
let userSearchQuery = document.getElementById("searchTerm").value;
bottom_bar_song_name.textContent = userSearchQuery;

let apiStringForNapsterSearch = "http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&offset=5&per_type_limit=5&type=track&query=" + userSearchQuery;
//string constructer with user search query and build a required napster api search format

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200){
let napsterReturnJsonResult = JSON.parse(this.responseText);
para_track_name.textContent = napsterReturnJsonResult.search.data.tracks[0].name;
para_preview_url.src = napsterReturnJsonResult.search.data.tracks[0].previewURL;
}
};
xhttp.open("GET", apiStringForNapsterSearch, true);
xhttp.send();
}