const Twitter = require('twitter');

const apiKey = 'IxCNb4uWSVY8OzMAFbJHzQEr8';
const apiSecret = 'TQUxHFsKokAEMltQNkckWvpLUI9q8LoorOdFiyKO3IWvJVaVAT';
const accessToken = '1268175495818096641-XZqX3kzKN6NZr0YREqJEELj4UmpnUV';
const accessTokenSecret = 'rz2jPAssHeCpv7RCKpkzvVPpX2ftRaAP6ou1zeesgbSFk';

const client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecret,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret,
});

async function postStatus(text, base64Image) {
  try {
    let tweetArguments = {
      status: text,
    };

    if (base64Image) {
      const imageResponse = await client.post('media/upload', {
        media_data: base64Image,
      });

      tweetArguments = {
        ...tweetArguments,
        media_ids: imageResponse.media_id_string,
      };
    }

    const tweetResponse = await client.post('statuses/update', tweetArguments);

    const url = getUrlFromTweetResponse(tweetResponse);
    return { url };
  } catch (ex) {
    return { exception: ex };
  }
}

function getUrlFromTweetResponse(response) {
  const { user, id_str } = response;

  return `https://twitter.com/${user.screen_name}/status/${id_str}`;
}

module.exports = {
  postStatus,
};
