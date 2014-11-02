
const TweetStack = require('../models/TweetStack');

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {

            // var request = require('request');
            // request('https://api.twitter.com/1.1/statuses/home_timeline.json', function (error, response, body) {
            //   if (!error && response.statusCode == 200) {
            //     console.log(body) // Print the google web page.
            //   }
            // });

            const
                user = this.session.passport.user,
                twit = require('../helpers/twit')(user.token, user.tokenSecret),
                data = yield twit.get('statuses/home_timeline', {count: 5, exclude_replies: true}),
                tweetStack = new TweetStack(data[0]);

            // this.body = JSON.stringify(data[0][1], null, '\t');
            yield this.render('app', {init: tweetStack.toJSONString()});

        }

    });

};
