// Using the Twit node package
// https://github.com/ttezel/twit
//var Twit = require('twit');

// Pulling all my twitter account info from another file
//var config = require('./config.js');

// Making a Twit object for connection to the API
//var T = new Twit(config);

const T = require("./Twit.js");
const my_user_name = require("../config").userName;
//const timeout = 1000 * 60 * 60 ; // timeout to send the message 60 min

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 30*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet_1= 'Hello';
  var tweet_2= 'Hi';
  var tweet_3= 'Hey';
  var tweet_4= 'Namastey';
  
  // Post that tweet!
  T.post('statuses/update', { status: tweet_1, tweet_2, tweet_3, tweet_4 }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };

}
