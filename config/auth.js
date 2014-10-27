
"use strict";

const
    passport        = require('koa-passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    config          = require('./config');

passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    function(token, tokenSecret, profile, done) {

        profile.token = token;
        profile.tokenSecret = tokenSecret;

        //Based on profile return from Twitter, find existing user
        let user = profile;

        //Return user model
        return done(null, user);

    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = passport;