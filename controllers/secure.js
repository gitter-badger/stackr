
//Secures routes
const
    Router   = require('koa-router'),
    router   = new Router(),
    twttr    = require('twitter-text');

//Middleware: authed
function *authed(next){

    if (this.req.isAuthenticated()){
        yield next;

    } else {

        //Set redirect path in session
        this.session.returnTo = this.session.returnTo || this.req.url;

        this.redirect('/');

    }

}

router.get('/app', authed, function *(){

    const
        user = this.session.passport.user,
        twit = require('../helpers/twit')(user.token, user.tokenSecret),
        data = yield twit.get('statuses/home_timeline', {count: 5}),
        tweets = data[0],
        returnedTweets = [];

    tweets.forEach(function(tweet) {
        returnedTweets.push({
            name:      tweet.user.name,
            username:  tweet.user.screen_name,
            avatarUrl: tweet.user.profile_image_url,
            rtCount:   tweet.retweet_count,
            favCount:  tweet.favorite_count,
            text:      twttr.autoLink(tweet.text)
        });
    });

    yield this.render('app', {init: JSON.stringify(returnedTweets)});

});

module.exports = router;
