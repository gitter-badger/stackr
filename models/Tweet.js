
const _      = require('underscore'),
      moment = require('moment'),
      twttr  = require('twitter-text'),
      Model  = require('./Model');

function Tweet() {
    Model.apply(this, arguments);
}

Tweet.prototype = new Model();

Tweet.prototype = _.extend(Tweet.prototype, {

    parse: function(data) {

        var tweet = {};

        if(data.retweeted_status) {
            tweet.rtBy = data.user.name;
            data = data.retweeted_status;
        }

        _.extend(tweet, {
            name:      data.user.name,
            username:  data.user.screen_name,
            avatarUrl: data.user.profile_image_url,
            rtCount:   data.retweet_count,
            favCount:  data.favorite_count,
            timeAgo:   moment(data.created_at).fromNow(),
            text:      twttr.autoLink(data.text),
            pictureUrl: 'https://pbs.twimg.com/media/B1I-fqmIcAAnMVL.jpg'
        });

        return tweet;

    }

});

module.exports = Tweet;
