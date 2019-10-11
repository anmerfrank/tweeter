$(document).ready(function() {
  $('.input').keyup('keyup', function () {
    const text = $(this).val();
    const charCount = text.length;
    const remainingChars = 140-charCount;
    $(this).parent().children('.footer').children('#counter').text(remainingChars)

    if (remainingChars < 0) {
      document.getElementById("counter").style.color = "#6d0000";
    }
    if (remainingChars > 0) {
      document.getElementById("counter").style.color = "#0f3624";
    }
  });
});


