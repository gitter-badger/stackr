
'use strict';

const
    passport        = require('koa-passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    config          = require('./config');

passport.use(new TwitterStrategy({
        consumerKey: config.twitterAPI.consumerKey,
        consumerSecret: config.twitterAPI.consumerSecret
    },
    function(token, tokenSecret, profile, done) {

        profile.token = token;
        profile.tokenSecret = tokenSecret;

        // Based on profile returned from Twitter, find existing user
        // TODO: Implement user database
        // let user = profile;

        //Return user model
        return done(null, profile);

    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = passport;
