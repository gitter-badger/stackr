
const _  = require('lodash');
const TweetStack  = require('./TweetStack');

function SyncTweetStack(token, tokenSecret) {
    // Initialize Twit client
    this.twit = twit = require('../helpers/twit')(token, tokenSecret);
    TweetStack.apply(this, arguments);
}

SyncTweetStack.prototype =  _.extend(TweetStack.prototype, {

    sync: function*() {
        // Fetch data from API
        const data = yield this.twit.get('statuses/home_timeline', {count: 5, exclude_replies: true});

        // Set data to stack
        this.setData(data[0]);
    }

});

SyncTweetStack.prototype = new TweetStack();

module.exports = SyncTweetStack;
