
const passport = require('./../config/auth');

module.exports = function(router) {

    router.get('/auth/twitter',
        passport.authenticate('twitter', {callbackURL: '/auth/twitter/callback'})
    );

    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', { successReturnToOrRedirect: '/app', failureRedirect: '/' })
    );

};
