/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results");

// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  console.log(form.search.value);
  event.preventDefault();
  searchSoundCloud(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(song){
  fetch("http://api.soundcloud.com/tracks/?client_id=8538a1744a7fdaa59981232897501e04&q=" + song)
  .then(function(response){
    response.json().then(function(data){
      console.log(data);
    })
  })
}

// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

























// "https//api.soundcloud.com/users/ /tracks?client_id=095fe1dcd09eb3d0e13d89c76f5618f"








// Promise by Usher Object from Soundcloud

// Object
// artwork_url
// :
// "https://i1.sndcdn.com/artworks-000125765507-w93mk1-large.jpg"
// attachments_uri
// :
// "https://api.soundcloud.com/tracks/200883705/attachments"
// bpm
// :
// null
// comment_count
// :
// 406
// commentable
// :
// true
// created_at
// :
// "2015/04/15 05:28:48 +0000"
// description
// :
// "Promise Romeo Santos featuring Usher Raymond"
// download_count
// :
// 0
// download_url
// :
// null
// downloadable
// :
// false
// duration
// :
// 254821
// embeddable_by
// :
// "all"
// favoritings_count
// :
// 0
// genre
// :
// "Romeo santos"
// id
// :
// 200883705
// isrc
// :
// null
// key_signature
// :
// ""
// kind
// :
// "track"
// label_id
// :
// null
// label_name
// :
// null
// last_modified
// :
// "2017/05/22 16:21:18 +0000"
// license
// :
// "all-rights-reserved"
// likes_count
// :
// 80813
// original_content_size
// :
// 44935622
// original_format
// :
// "wav"
// permalink
// :
// "romeo-santos-promise-ft-usher"
// permalink_url
// :
// "https://soundcloud.com/heber-salvador/romeo-santos-promise-ft-usher"
// playback_count
// :
// 5381462
// purchase_title
// :
// null
// purchase_url
// :
// null
// release
// :
// ""
// release_day
// :
// null
// release_month
// :
// null
// release_year
// :
// null
// reposts_count
// :
// 3537
// sharing
// :
// "public"
// state
// :
// "finished"
// stream_url
// :
// "https://api.soundcloud.com/tracks/200883705/stream"
// streamable
// :
// true
// tag_list
// :
// "Bachata Love Usher"
// title
// :
// "Promise -Romeo Santos Ft. Usher"
// track_type
// :
// null
// uri
// :
// "https://api.soundcloud.com/tracks/200883705"
// user
// :
// Object
// user_favorite
// :
// false
// user_id
// :
// 80570278
// user_playback_count
// :
// null
// video_url
// :
// null
// waveform_url
// :
// "https://w1.sndcdn.com/rjN6w5q0iCIB_m.png"
// __proto__
// :
// Object
