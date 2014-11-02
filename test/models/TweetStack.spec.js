
var TweetStack = require('../../models/TweetStack');


var chai   = require('chai'),
    sinon  = require('sinon'),
    expect = chai.expect,
    moment = require('moment'),
    TweetStack  = require('../../models/TweetStack'),
    Stack  = require('../../models/Stack');

chai.use(require('sinon-chai'));

var mockTweets = require('./mock/tweets.json');

describe('TweetStack', function(){

    describe('Initialization', function(){

        it('call parent constructor', function() {
            var spy = sinon.spy(Stack.prototype, 'initialize');
            var tweet = new TweetStack(mockTweets);
            expect(spy).to.have.been.calledWith(mockTweets);
            Stack.prototype.initialize.restore();
        });

    });

});