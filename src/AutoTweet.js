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
setInterval(tweeter, 10*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var myArray = ['January', 'February', 'March']; 
var tweet = myArray[(Math.random() * myArray.length) | 0]
 /* function getRandom(arr){
  var rand = Math.random();
  return arr[Math.floor(rand *arr.length)];
}
 
var greetings = [
        "Hello", 
        "Hi", 
        "Hey"
    ],
    randomGreeting = getRandom(greetings);*/
  
  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

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
