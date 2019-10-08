$(document).ready(function() {
  $('.input').keyup('keyup', function () {
    const text = $(this).val();
    const charCount = text.length;
    const remainingChars = 140-charCount;
    const currentCount = $(this).parent().children('.footer').children('#counter').text(remainingChars)

    console.log(currentCount);

    if (remainingChars < 0) {
      document.getElementById("counter").style.color = "magenta";
    }
  });

  });



// $('.container'). // count down in this class.

// TO MAKE THE TWEETS In a top-down list: 

// $(document).ready(() = {
// $('#my-button').click(() => {
// const text = $('#my-input').val();
// const listItem = $("<li>").text(text);
// $("#list-container").prepend($listItem);
// ));
// });