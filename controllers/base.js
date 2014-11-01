
//Secures routes
const
    _        = require('underscore'),
    moment   = require('moment'),
    twttr    = require('twitter-text');

module.exports = function(router) {

    router.get('/', function *(){
        if (!this.req.isAuthenticated()){
            yield this.render('landing', {title: 'stackr'});
        } else {

            const
                user = this.session.passport.user,
                twit = require('../helpers/twit')(user.token, user.tokenSecret),
                data = yield twit.get('statuses/home_timeline', {count: 5, exclude_replies: true}),
                tweets = data[0],
                returnedTweets = [];

            tweets.forEach(function(tweet) {

                var treatedTweet = {};

                if(tweet['retweeted_status']) {
                    treatedTweet['rtBy'] = tweet.user.name;
                    tweet = tweet['retweeted_status'];
                }

                _.extend(treatedTweet, {
                    name:      tweet.user.name,
                    username:  tweet.user.screen_name,
                    avatarUrl: tweet.user.profile_image_url,
                    rtCount:   tweet.retweet_count,
                    favCount:  tweet.favorite_count,
                    timeAgo:   moment(tweet['created_at']).fromNow(),
                    text:      twttr.autoLink(tweet.text),
                    pictureUrl: 'https://pbs.twimg.com/media/B1I-fqmIcAAnMVL.jpg'
                });

                returnedTweets.push(treatedTweet);

            });

            // this.body = JSON.stringify(tweets[0], null, '\t');
            yield this.render('app', {init: JSON.stringify(returnedTweets)});

        }

    });

};
