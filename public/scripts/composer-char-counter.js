$(document).ready(function() {
  $('.input').keyup('keyup', function () {
    const text = $(this).val();
    const charCount = text.length;
    const remainingChars = 140-charCount;
    $(this).parent().children('.footer').children('#counter').text(remainingChars)

    if (remainingChars < 0) {
      document.getElementById("counter").style.color = "magenta";
    }
    if (remainingChars > 0) {
      document.getElementById("counter").style.color = "#4d014d";
    }
  });

  });


