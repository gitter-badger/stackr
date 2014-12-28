
'use strict';

const
    _ = require('lodash'),
    url = require('url'),
    Immutable = require('immutable'),
    config = require('../config/config'),
    tweet = require('../models/tweet'),
    keyIn = require('../helpers/keyIn'),
    cache = require('../helpers/redis-cache');

function* getHomeTimelineStack(id, token, tokenSecret, params) {

    let key    = 'statuses/home_timeline/' + id,
        result = yield cache.get(key);

    if(result) {
        result = Immutable.OrderedSet(JSON.parse(result));
    }

    if(!result || result.size < 20) {
        let twitParams = Immutable.Map({
            count: 200,
            exclude_replies: true
        })
            .merge(params)
            .filter(keyIn('count', 'since_id', 'max_id', 'trim_user', 'exclude_replies', 'contributor_details', 'include_entities'));

        let data = yield require('../helpers/twit')(token, tokenSecret).get('statuses/home_timeline', twitParams.toJS());

        result = Immutable.OrderedSet(data[0]).map(tweet.parse);
    }

    let count        = config.tweets.count,
        returnTweets = result.slice(-count);

    result  = result.skipLast(count);

    cache.set(key, result);

    return returnTweets;

}

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {
            const
                user = this.session.passport.user,
                stack = yield getHomeTimelineStack(user.id, user.token, user.tokenSecret);

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
                stack = yield getHomeTimelineStack(user.token, user.tokenSecret, params);

            this.body = stack.toJS();
        }

    });

};
