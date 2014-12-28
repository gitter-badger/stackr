
'use strict';

const
    _ = require('lodash'),
    url = require('url'),
    Immutable = require('immutable'),
    config = require('../config/config'),
    TweetStack = require('../models/TweetStack'),
    client = require('../helpers/redis-client');

function twit(token, tokenSecret) {
    return require('../helpers/twit')(token, tokenSecret);
}

function* getHomeTimelineStack(id, token, tokenSecret, params) {

    let key = 'statuses/home_timeline/' + id,
        result = yield client.get(key);

    if(result) {
        result = JSON.parse(result);
    }

    if(!result || !result.length) {
        console.log('no res');
        let twitParams = _.extend({
            count: 200,
            exclude_replies: true
        }, params);
        twitParams = _.pick(twitParams, 'count', 'since_id', 'max_id', 'trim_user', 'exclude_replies', 'contributor_details', 'include_entities');

        let data = yield twit(token, tokenSecret).get('statuses/home_timeline', twitParams);

        result = data[0];
    }

    let count        = config.tweets.count,
        cacheTweets  = Immutable.List(result),
        returnTweets = cacheTweets.slice(-count);

    cacheTweets  = cacheTweets.skipLast(count);

    client.setex(key, 21600, JSON.stringify(cacheTweets));

    return new TweetStack(returnTweets);

}

module.exports = function(router) {

    router.get('/', function *() {

        if (!this.req.isAuthenticated()) {
            yield this.render('landing', {title: 'stackr'});
        } else {
            const
                user = this.session.passport.user,
                stack = yield getHomeTimelineStack(user.id, user.token, user.tokenSecret);

            var json = _.uniq(stack.toJSON(), false, function(tweet) { return tweet.id; });
            yield this.render('app', {init: JSON.stringify(json)});
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

            this.body = _.uniq(stack.toJSON(), false, function(tweet) { return tweet.id; });
        }

    });

};
