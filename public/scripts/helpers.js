

const renderTweets = function (tweets) {
  $('.tweetContainer').empty();
  for (let tweet of tweets) {
    let output = createTweetElement(tweet);
    $(`.tweetContainer`).prepend(output);
  }
};

const loadTweets = function (data) {
  $.ajax({ url: '/tweets', method: 'GET' })
    .then(function (res) {
      renderTweets(res);
    })
};

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function (tweet) {
  let timeStart = Date.now();
  let millis = Date.now() - tweet.created_at;
  let dateStamp = (millis / (60 * 60 * 24 * 1000))
  let totalDate = Math.round(dateStamp);

  const tweetTemplate = (
    `<article class="tweet-body">
         <header class="tweetheader">
          <span id="usericon"><img src="${tweet.user.avatars}"> ${tweet.user.name} </span><span class="username">${tweet.user.handle}</span>
        </header>
        ${escape(tweet.content.text)}
        <footer class="tweetfooter"><h8>${totalDate} days ago</h8><div class="icons"><i class="fab fa-font-awesome-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></div></footer>
      </article>`
  )
  return tweetTemplate;
}
