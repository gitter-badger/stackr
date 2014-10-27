
const
    config = require('../config/config'),
    thunkify = require('thunkify-wrap'),
    Twit   = require('twit');

module.exports = function(token, secret) {

    var twit = new Twit({
        consumer_key:         config.twitter.consumerKey,
        consumer_secret:      config.twitter.consumerSecret,
        access_token:         token,
        access_token_secret:  secret
    });

    return thunkify(twit);

}