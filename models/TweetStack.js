
const _      = require('underscore'),
      Stack  = require('./Stack'),
      Tweet  = require('./Tweet')

function TweetStack() {
    this.model = Tweet;
    Stack.apply(this, arguments);
}

TweetStack.prototype = new Stack();

module.exports = TweetStack;
