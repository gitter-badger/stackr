
const passport = require('./../config/auth');

module.exports = function(router) {

    router.get('/auth/twitter',
        passport.authenticate('twitter')
    );

    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', { successReturnToOrRedirect: '/app', failureRedirect: '/' })
    );

};
