/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// IMPORTED FUNCTIONS



$(document).ready(() => {




  // NAVIGATION DROP-BOX CODE

  $('#navbutton').on("click", function () {
    $(".new-tweet").slideToggle({
    })
    $(".input").focus();
  })

  // TWEET CREATION


  // HELPER FUNCTIONS

  const data = [];

  // const loadTweets = function (data) {
  //   $.ajax({ url: '/tweets', method: 'GET' })
  //     .then(function (res) {
  //       renderTweets(res);
  //     })
  // };

 
  
  // const renderTweets = function (tweets) {
  //   $('.tweet-body').empty();
  //   for (let tweet of tweets) {
  //     let output = createTweetElement(tweet);
  //     $(`.tweetContainer`).prepend(output);
  //   }
  // }

  // const escape = function (str) {
  //   let div = document.createElement('div');
  //   div.appendChild(document.createTextNode(str));
  //   return div.innerHTML;
  // }

  // const createTweetElement = function (tweet) {
  //   let timeStart = Date.now();
  //   let millis = Date.now() - tweet.created_at;
  //   let dateStamp = (millis / (60 * 60 * 24 * 1000))
  //   let totalDate = Math.round(dateStamp);

  //   const tweetTemplate = (
  //     `<article class="tweet-body">
  //        <header class="tweetheader">
  //         <span id="usericon"><img src="${tweet.user.avatars}"> ${tweet.user.name} </span><span class="username">${tweet.user.handle}</span>
  //       </header>
  //       ${escape(tweet.content.text)}
  //       <footer class="tweetfooter"><h8>${totalDate} days ago</h8><div class="icons"><i class="fab fa-font-awesome-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></div></footer>
  //     </article>`
  //   )
  //   return tweetTemplate;
  // }

  // ON PAGELOAD
  
  loadTweets();

  // TO POST A TWEET


  
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
      event.preventDefault();

      

      // ERROR CHECKING - CHARACTER COUNT

      let tweetInput = $('.input')[0].value.length;
      if (tweetInput > 140) {
        $('#error140').slideDown();
      } else if (tweetInput === 0 || tweetInput === undefined || tweetInput === null) {
        $('#zeroChars').slideDown();
        $('#error140').hide;
      } else {

        // EVERYTHING OK, TWEET POSTING

        $("#error140").slideUp()
        $('#zeroChars').slideUp();
        $.ajax({ url: '/tweets', method: 'POST', data: $form.serialize() })
          .then(function (res) {
            loadTweets();
            $('.input').focus().val("");
        })
      }
    });

    renderTweets(data);
    
});