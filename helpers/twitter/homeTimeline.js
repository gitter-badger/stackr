
'use strict';

const Immutable = require('immutable'),
    config = require('../../config/config'),
    tweet = require('../../models/tweet'),
    keyIn = require('../predicates/keyIn'),
    cache = require('../redis/cache');

module.exports = {
    get: function*(id, token, tokenSecret, params) {

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

            let data = yield require('../helpers/twitter/twit')(token, tokenSecret).get('statuses/home_timeline', twitParams.toJS());

            result = Immutable.OrderedSet(data[0]).map(tweet.parse);
        }

        let count        = config.tweets.count,
            returnTweets = result.slice(-count);

        result  = result.skipLast(count);

        cache.set(key, result);

        return returnTweets;

    }
};
