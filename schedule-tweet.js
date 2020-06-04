console.log('Example is up now..');

const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);

setInterval(tweetScheduler, 1000 * 20); // setinterval
// function to schdule posting of a tweet ,it is every 20 seconds,
// 1000 is the milliseconds which is equal to 1 seconds

tweetScheduler(); // function which posts a tweet

function tweetScheduler() {
  var randomNumber = Math.floor(Math.random() * 1000);
  var tweet = {
    status: randomNumber + '#hiii!!',
  };
  tweetBot.post('statuses/update', tweet, (err, res) => {
    if (!err) {
      console.log(`Scheaduled tweet successful`);
    } else {
      console.log(err.message, 'Scheaduled tweet unsuccessful');
    }
  });
} // this is the function which makes post to the twitter
