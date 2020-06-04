const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);
const fs = require('fs');

const tweet = {
  status: 'HELLO ANTONIA ',
};
async function postStatus(tweet) {
  tweetBot.post('statuses/update', tweet, (err, res) => {
    if (!err) {
      console.log(`Hello world message successful`);
    } else {
      console.log(err.message, 'HW unsuccessful');
    }
  });
}
postStatus(tweet);
