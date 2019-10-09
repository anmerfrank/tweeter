/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 // TWEET CREATION CODE



$(document).ready(() => {
  
const data = [
  // {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png"
  //     ,
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // },
  // {
  //   "user": {
  //     "name": "Descartes",
  //     "avatars": "https://i.imgur.com/nlhLi3I.png",
  //     "handle": "@rd" },
  //   "content": {
  //     "text": "Je pense , donc je suis"
  //   },
  //   "created_at": 1461113959088
  // }
]

const renderTweets = function(tweets) {
  $('.tweet-body').empty();
  for (let tweet of tweets) {
    let output = createTweetElement(tweet);
    $(`.tweetContainer`).prepend(output); 
  }

}

  const createTweetElement = function(tweet) {
    const $tweets = (
     `<article class="tweet-body">
       <header class="tweetheader">
        <span id="usericon"><img src="${tweet.user.avatars}"> ${tweet.user.name} </span><span class="username">${tweet.user.handle}</span>
      </header>
      ${tweet.content.text}
      <footer class="tweetfooter"><h8>10 days ago</h8><h8>Lots of icons here</h8></footer>
    </article>`
    ) 
    return $tweets;
   }

  // renderTweets(data);

// TO POST A TWEET


    $(function() {
    const $form = $('.new-tweet form'); 
    $form.on('submit', function () {
      event.preventDefault();
      console.log("Button clicked! Tweet submitting!");
      $.ajax({ url: '/tweets', method: 'POST', data: $form.serialize()})
        .then(function(res) {
          loadTweets();
        });
    });

    const loadTweets = function(data) {

      $.ajax({url: '/tweets',  method: 'GET'})
      .then(function(res) {
        renderTweets(res);
      
    })
    };
  });
});
