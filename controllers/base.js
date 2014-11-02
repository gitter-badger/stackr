
const Tweet = require('../models/Tweet');

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

            tweets.forEach(function(tweetData) {
                var tweet = new Tweet(tweetData);
                returnedTweets.push(tweet.toJSON());
            });

            // this.body = JSON.stringify(tweets[0], null, '\t');
            yield this.render('app', {init: JSON.stringify(returnedTweets)});

        }

    });

};
