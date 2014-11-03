!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Blockquote tweet this button on hover
	
$('blockquote.tweet-this').hover(function() {

  var blockQuoteText = $(this).text();
  var currentUrl = window.location;

  $(this).append('<div class="tweet-quote"><a href="https://twitter.com/share" data-text="' +blockQuoteText+ '"  class="twitter-share-button" data-via="doodlemarks" data-url="' +currentUrl+ '" data-size="large" data-count="vertical">Tweet</a></div>');

  $('.tweet-quote').hide().fadeIn(200);

  twttr.widgets.load();

  }, function() {
    $('.tweet-quote').remove();
});



