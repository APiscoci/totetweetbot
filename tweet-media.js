const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);
const fs = require('fs');

const imageData = fs.readFileSync('./img/horses.jpeg', { encoding: 'base64' });
// first we must post the media to Twitter
tweetBot.post('media/upload', { media: imageData }, function (
  error,
  media,
  response
) {
  if (error) {
    console.log(error, 'Image not uploded');
  } else {
    const status = {
      status: 'The UK TOTE GROUP races',
      media_ids: media.media_id_string,
    };

    tweetBot.post('statuses/update', status, function (error, tweet, response) {
      if (error) {
        console.log(error, 'Text not been uploded');
      } else {
        console.log('Successfully tweeted an image!');
      }
    });
  }
});
