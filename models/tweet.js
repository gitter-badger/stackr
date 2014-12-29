
const moment = require('moment'),
      twttr  = require('twitter-text');

module.exports = {

    parse: function(data) {

        var tweet = {}, rtBy, image;

        if (data.retweeted_status) {
            rtBy = data.user.name;
            data = data.retweeted_status;
        }

        var text = data.text,
            twitterTextOptions = {
                usernameIncludeSymbol: true,
                urlEntities: data.entities.urls,
                targetBlank: true
            };

        if(data.extended_entities && data.extended_entities.media) {
            data.extended_entities.media.forEach(function(entity) {
                if(entity.type === 'photo') {
                    image = entity.media_url;
                    text = text.replace(entity.url, '');
                }
            });
        }

        text = twttr.autoLink(text, twitterTextOptions);

        return {
            id:        data.id,
            name:      data.user.name,
            username:  data.user.screen_name,
            avatarUrl: data.user.profile_image_url,
            rtCount:   data.retweet_count,
            favCount:  data.favorite_count,
            timeAgo:   moment(data.created_at).fromNow(),
            text:      text,
            rtBy:      rtBy,
            image:     image
        };

    }

}
