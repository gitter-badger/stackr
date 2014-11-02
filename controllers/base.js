
const TweetStack = require('../models/TweetStack');

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {

            const
                user = this.session.passport.user,
                twit = require('../helpers/twit')(user.token, user.tokenSecret),
                data = yield twit.get('statuses/home_timeline', {count: 5, exclude_replies: true}),
                tweetStack = new TweetStack(data[0]);

            // this.body = JSON.stringify(tweets[0], null, '\t');
            yield this.render('app', {init: tweetStack.toJSONString()});

        }

    });

};
