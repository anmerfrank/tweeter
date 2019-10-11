/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {


  // TOGGLE "COMPOSE" BOX

  $('#navbutton').on("click", function () {
    $(".new-tweet").slideToggle({
    })
    $(".input").focus();
  })

  const data = [];


  loadTweets();

  // POSTING A TWEET

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
          $('.input').focus().val("");
          $('.input').parent().children('.footer').children('#counter').text(140)
          loadTweets();
        })
    }
  });

  renderTweets(data);

});