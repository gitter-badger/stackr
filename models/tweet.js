
const _      = require('lodash'),
      moment = require('moment'),
      twttr  = require('twitter-text');

module.exports = {

    parse: function(data) {

        var tweet = {};

        if (data.retweeted_status) {
            tweet.rtBy = data.user.name;
            data = data.retweeted_status;
        }

        var text = data.text,
            twitterTextOptions = {
                usernameIncludeSymbol: true,
                targetBlank: true
            };

            if(data.entities) {
                twitterTextOptions.urlEntities = data.entities.urls;
            }

        if(data.extended_entities && data.extended_entities.media) {

            var media = data.extended_entities.media;

            media.forEach(function(entity) {

                if(entity.type === 'photo') {
                    tweet.image = entity.media_url;
                    text = text.replace(entity.url, '');
                }

            });

        }

        text = twttr.autoLink(text, twitterTextOptions);

        _.extend(tweet, {
            id:        data.id,
            name:      data.user.name,
            username:  data.user.screen_name,
            avatarUrl: data.user.profile_image_url,
            rtCount:   data.retweet_count,
            favCount:  data.favorite_count,
            timeAgo:   moment(data.created_at).fromNow(),
            text:      text
        });

        return tweet;

    }

}
