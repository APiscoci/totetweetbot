const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);

const params = {
  q: '#nature AND #photography filter:media',
  count: 10,
  lang: 'en',
};

const favParams = {
  q: '#photography OR #nature filter:media',
  count: 15,
  lang: 'en',
};

tweetBot.get('search/tweets', params, (err, data, res) => {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let tweetID = { id: data.statuses[i].id_str };
      tweetBot.post('statuses/retweet', tweetID, (err, res) => {
        if (!err) {
          console.log(`Retweet successful`);
        } else {
          console.log(err.message);
        }
      });
    }
  } else {
    console.log(err);
  }
});

tweetBot.get('search/tweets', favParams, (err, data, res) => {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let tweetID = { id: data.statuses[i].id_str };
      tweetBot.post('favorites/create', tweetID, (err, res) => {
        if (!err) {
          console.log(`Favorite successful`);
        } else {
          console.log(err.message);
        }
      });
    }
  } else {
    console.log(err);
  }
});

// const twitterApi = require('./touch');

// const Bot = async (event, context, callback) => {
//   const { text, image } = event;

//   if (!text) {
//     console.log('No text given for tweet. event: ', event);
//     return false;
//   }

//   const { exception, url } = await twitterApi.postStatus(text, image);

//   callback(exception, {
//     body: {
//       url,
//     },
//     headers: {
//       'Access-Control-Allow-Origin': '*', // Required for CORS support to work
//     },
//   });
// };
// const event = { text: 'aaa', image: null };

// Bot(event);
