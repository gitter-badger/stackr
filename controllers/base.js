
const
    _ = require('lodash'),
    SyncTweetStack = require('../models/SyncTweetStack');

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {
            const
                user = this.session.passport.user,
                tweetStack = new SyncTweetStack(user.token, user.tokenSecret);

            yield tweetStack.sync();

            var json = _.uniq(tweetStack.toJSON(), false, function(tweet) { return tweet.id; });
            yield this.render('app', {init: JSON.stringify(json)});
        }

    });

};
