// Using require() in ES5
var FB = require('fb');

// Using require() in ES2015
var { FB, FacebookApiException } = require('fb');

// ES5
var FB = require('fb'),
  fb = new FB.Facebook(options);

FB.options({ version: 'v2.4' });
var fooApp = FB.extend({ appId: 'foo_id', appSecret: 'secret' }),
  barApp = FB.extend({ appId: 'bar_id', appSecret: 'secret' });
FB.api('4', function (res) {
  if (!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log(res.id);
  console.log(res.name);
});

FB.api('4', { fields: ['id', 'name'] }, function (res) {
  if (!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log(res.id);
  console.log(res.name);
});
FB.setAccessToken(
  'EAAr6Ww7NYO4BAJJ0CoLZC4S3gbJg6ezQeKHk5bNDSDZCnQH1HEsFCZBLjiru7vGKu7pqGX5hCkDJ7GXQvABOhZB33ZCi92KFbYIHwAI93saWVgeZC3GXGbjqj81ARFsJFGHmVGI4UqXiFuX2Vl9v6ZAb3lGCD60Wwzq8VIjnMVoRPLyzA8ZBGs8zjTJTB2vSswCqQvhFP4P703JR44Nlc28pk77WRTqtjVLIME5OdGddZC0W6VGzXiG5krhKAq6ZBvlQ4ZD'
);

var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body }, function (res) {
  if (!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
