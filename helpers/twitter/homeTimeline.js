
'use strict';

const Immutable = require('immutable'),
    config = require('../../config/config'),
    tweet  = require('../../models/tweet'),
    keyIn  = require('../predicates/keyIn'),
    idfunc = require('../predicates/id'),
    cache  = require('../redis/cache');

module.exports = {

    loadCache: function*(token, tokenSecret, key) {

        // Set twit parameters to send
        let twitParams = {
                count: 80,
                exclude_replies: true
            },
            cacheData = yield cache.get(key);

        // If there is already cached data
        if(cacheData) {
            // Retrieve the minimum id of the current set of tweet to load the next page
            let set = Immutable.OrderedSet(JSON.parse(cacheData));
            if(set.size) {
                twitParams.max_id = Immutable.OrderedSet(JSON.parse(cacheData)).last().id;
            }
        }

        // Get data from Twitter API and set it to cache
        let data = yield require('../twitter/twit')(token, tokenSecret).get('statuses/home_timeline', twitParams),
            cacheSet = Immutable.OrderedSet(data[0]).map(tweet.parse);
        cache.set(key, cacheSet);

        return cacheSet;

    },

    get: function*(id, token, tokenSecret, params) {

        // Get data from redis cache
        let key    = 'statuses/home_timeline/' + id,
            result = yield cache.get(key);

        // Convert to an ordered set
        result = Immutable.OrderedSet(JSON.parse(result));

        // Load cache if current cache is empty
        if(!result.size) {
            result = yield this.loadCache(token, tokenSecret, key);
        }

        // Load data relative to max id passed
        if(params && params.max_id) {
            result = result.skipWhile(idfunc.gte(params.max_id));
        }

        // Get a slice of elements to send to client
        result = result.slice(0, config.tweets.count);

        // If there is not enough results, reload cache and add missing data
        if(result.size < config.tweets.count) {
            let newResult = yield this.loadCache(token, tokenSecret, key);
            result = result.concat(newResult.slice(0, config.tweets.count - result.size));
        }

        return result;

    }
};
