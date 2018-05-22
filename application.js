$(document).ready(function(){
  var $body = $('body');
  //$body.html('');
  var $tweets = $('.tweets');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="message"><button class="user">@'+tweet.user+' </button>  : '+tweet.message+ '<span class="time"> TIME : </span>'+tweet.created_at+'</div>');
    $tweet.appendTo($tweets);
    index -= 1;
  }

  $('.new_tweets').on('click', newTweet);
  $('.show_tweets').on('click', showAllTweets);
  $('.hide_tweets').on('click', hideAllTweets);
  $('.newTweets, .tweets').on('click', '.user', userName);
  $('.add_myTweet').on('click', addMyTweet);

  function newTweet() {
    var tweet = streams.home[streams.home.length - 1];
    var $tweet = $('<div class="message"><button class="user">@'+tweet.user+' </button>  : '+tweet.message+ '<span class="time"> TIME : </span>'+tweet.created_at+'  <span class="new"> #NEWTWEET </span></div>');
    $tweet.prependTo($('.newTweets'));
  }

  function showAllTweets() {
    $('.message').show();
  }

  function hideAllTweets() {
    $('.message').hide();
  }

  function userName() {
    //alert('clicked');
    var userName = $(this).text().slice(1);
    $('.message').each(function() {
      $(this).addClass($(this).find('.user').text().slice(1));
    });
    $('.message').hide();
    $('.'+userName).show();
  }

  function addMyTweet() {
    visitor = $('.uName').val();
    var message = $('.myTweet').val();

    //check if the info was entered in the input fields else alert the user
    if(!visitor || !message) {
      alert('Please provide input for both the fields');
    } else if(visitor.length>0) {
      streams.users[visitor] = [];
      writeTweet(message);
      var tweet = streams.home[streams.home.length - 1];
      tweet.created_at = new Date();
      var $tweet = $('<div class="message"><button class="user">@'+tweet.user+' </button>  : '+tweet.message+ '<span class="time"> TIME : </span>'+tweet.created_at+'  <span class="new"> #MYTWEET </span></div>');
      $tweet.prependTo($('.newTweets'));
    }
    $(".uName").val('');
    $(".myTweet").val('');
}

});