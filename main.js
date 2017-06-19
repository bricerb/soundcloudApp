/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results");
let index = 0;
let currentSearchUrl = [];
let current = -1;

// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  event.preventDefault();
  searchSoundCloud(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(song){
  fetch("http://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=" + song)
  .then(function(response){
    response.json().then(function(data){
      currentSearchUrl = [];
      results.innerHTML = "";
      index = 0;
      data.forEach(addData)
    })
  })
}

// 4. Create a way to append the fetch results to your page
function addData(obj) {
  if (obj !== null && obj.stream_url !== null) {
    currentSearchUrl.push(obj.stream_url);
    let text = '<div id="' + index + '" class="obj">';
    text += '<img id="' + index + '" src="' + obj.artwork_url + '"">';
    text += '<p id="' + index + '">' + obj.title + '</p>';
    text += '<p id="' + index + '>' + obj.user.username + '</p></div>';
    results.insertAdjacentHTML("beforeend", text);
    index ++;
  }
}

// 5. Create a way to listen for a click that will play the song in the audio play

results.addEventListener("click", function(e) {
  let target = e.target.id;
  if (current === -1 || current !== target) {
    current = target;
    audioPlayer.src = currentSearchUrl[target] + "?client_id=8538a1744a7fdaa59981232897501e04";
  }
})
