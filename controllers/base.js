
'use strict';

const
    url = require('url'),
    homeTimeline = require('../helpers/twitter/homeTimeline');

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {
            const
                user = this.session.passport.user,
                stack = yield homeTimeline.get(user.id, user.token, user.tokenSecret);

            yield this.render('app', {init: JSON.stringify(stack)});
        }

    });

    router.get('/timeline', function *() {

        if (!this.req.isAuthenticated()) {
            throw new Error('You must be authenticated to load a timeline');
        } else {
            const
                params = url.parse(this.req.url, true).query,
                user = this.session.passport.user,
                stack = yield homeTimeline.get(user.token, user.tokenSecret, params);

            this.body = stack.toJS();
        }

    });

};
