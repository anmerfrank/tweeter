/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // TWEET CREATION CODE


$(document).ready(() => {
  
const data = [];

const renderTweets = function(tweets) {
  $('.tweet-body').empty();
  for (let tweet of tweets) {
    let output = createTweetElement(tweet);
    $(`.tweetContainer`).prepend(output); 
    }
  }

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  

  const createTweetElement = function(tweet) {
    let timeStart = Date.now();
    let millis = Date.now() - tweet.created_at;
    let dateStamp = (millis / (60*60*24*1000))
    let totalDate = Math.round(dateStamp);

    const $tweets = (
     `<article class="tweet-body">
       <header class="tweetheader">
        <span id="usericon"><img src="${tweet.user.avatars}"> ${tweet.user.name} </span><span class="username">${tweet.user.handle}</span>
      </header>
      ${escape(tweet.content.text)}
      <footer class="tweetfooter"><h8>${totalDate} days ago</h8><h8>Lots of icons here</h8></footer>
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

      // // ESCAPE MALICIOUS TEXT
      // let tweetValue = $('.input')[0].value.text();

      // ERROR HANDLING  
      const errorAlert = function(errorData) {
        
      }



      let tweetInput = $('.input')[0].value.length;
      if (tweetInput > 140) {
        alert("Max 140 characters, please!");
      } else if (tweetInput === 0 || tweetInput === undefined || tweetInput === null) {
        alert("Please enter a tweet!");
      } else {
      // EVERYTHING OK, TWEET POSTING
        $.ajax({ url: '/tweets', method: 'POST', data: $form.serialize()})
          .then(function(res) {
            loadTweets();
          })
        };
    });

    const loadTweets = function(data) {

      $.ajax({url: '/tweets',  method: 'GET'})
      .then(function(res) {
        renderTweets(res);
      })
    };
  });
  
  // NAVIGATION DROP-BOX CODE

  $('#navbutton').on("click", function () {
    $(".new-tweet").slideToggle({
    })
    $(".input").focus();
  })

});



