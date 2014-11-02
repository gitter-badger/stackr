
var chai   = require('chai'),
    sinon  = require('sinon'),
    expect = chai.expect,
    moment = require('moment'),
    Tweet  = require('../../models/Tweet'),
    Model  = require('../../models/Model');

chai.use(require('sinon-chai'));

var mockTweet = require('./mock/tweet.json'),
    mockRetweet = require('./mock/retweet.json');

describe('Tweet', function(){

    describe('Initialization', function(){

        it('call parent constructor', function() {
            var spy = sinon.spy(Model.prototype, 'initialize');
            var tweet = new Tweet(mockTweet);
            expect(spy).to.have.been.calledWith(mockTweet);
            Model.prototype.initialize.restore();
        });

    });

    describe('parse', function(){

        beforeEach(function() {
            this.model = new Tweet(mockTweet);
        });

        it('returns parsed tweet when its not a RT', function() {
            expect(this.model.parse(mockTweet)).to.deep.equal({
                name:      'Gary Lineker',
                username:  'GaryLineker',
                avatarUrl: 'http://pbs.twimg.com/profile_images/431019030804447233/I-om-WMc_normal.jpeg',
                rtCount:   2,
                favCount:  1,
                timeAgo:   moment('Sun Nov 02 17:54:05 +0000 2014').fromNow(),
                text:      'This is a tweet text'
            });
        });

        it('returns parsed tweet when its a RT', function() {
            expect(this.model.parse(mockRetweet)).to.deep.equal({
                name:      'R',
                username:  'Hamster_1874',
                avatarUrl: 'http://pbs.twimg.com/profile_images/528528883126394880/Dg0TaziL_normal.jpeg',
                rtCount:   17,
                favCount:  15,
                timeAgo:   moment('Sun Nov 02 17:55:34 +0000 2014').fromNow(),
                rtBy:      'Gary Lineker',
                text:      'This is a retweet text'
            });
        });

    });

});
