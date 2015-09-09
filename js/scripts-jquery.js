$(document).ready(function() {
  $('form').submit(function(event) {
    var phrase = $('#phrase').val();
    var result = pigLatin(phrase);

    $('#results').text(result);
    $('#results').show();
    event.preventDefault();
  });
});
