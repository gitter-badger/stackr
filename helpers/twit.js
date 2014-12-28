
const
    config = require('../config/config'),
    thunkify = require('thunkify-wrap'),
    Twit   = require('twit');

module.exports = function(token, secret) {

    var twit = new Twit({
        consumer_key:         config.twitterAPI.consumerKey,
        consumer_secret:      config.twitterAPI.consumerSecret,
        access_token:         token,
        access_token_secret:  secret
    });

    return thunkify(twit, ['get', 'post']);

};
