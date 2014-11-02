
var chai   = require('chai'),
    sinon  = require('sinon'),
    expect = chai.expect,
    Stack  = require('../../models/Stack'),
    Model  = require('../../models/Model');

chai.use(require('sinon-chai'));

var mockData = [{
        foo: 'bar',
        colour: 'green'
    },{
        foo: 'baz',
        colour: 'black'
    }];

describe('Stack', function(){

    describe('Initialization', function(){

        it('call parent constructor', function() {
            var spy = sinon.spy(Model.prototype, 'initialize');
            var stack = new Stack(mockData);
            expect(spy).to.have.been.calledWith(mockData);
            Model.prototype.initialize.restore();
        });

    });

    describe('parse', function(){

        beforeEach(function() {
            this.model = new Stack();
        });

        it('returns an empty array when data passed is not an array', function() {
            expect(this.model.parse(true)).to.deep.equal([]);
            expect(this.model.parse('abc')).to.deep.equal([]);
            expect(this.model.parse()).to.deep.equal([]);
            expect(this.model.parse(null)).to.deep.equal([]);
            expect(this.model.parse(123)).to.deep.equal([]);
        });

        it('returns same data when model is not defined', function() {
            expect(this.model.parse(mockData)).to.deep.equal(mockData);
        });

        it('returns an array of classes when model is defined', function() {
            var spy = sinon.spy();
            this.model.model = spy;
            var parsed = this.model.parse(mockData);

            expect(spy).to.have.been.calledWithExactly(mockData[0]);
            expect(spy).to.have.been.callCount(mockData.length);
            expect(parsed).to.have.length(mockData.length);
            expect(parsed[0]).to.be.an.instanceof(spy);
            expect(parsed[1]).to.be.an.instanceof(spy);
        });

    });

    describe('toJSON', function(){

        beforeEach(function() {
            this.model = new Stack(mockData);
        });

        it('returns data when model is not defined', function() {
            expect(this.model.toJSON()).to.deep.equal(mockData);
        });

        it('returns an array of objects when model is defined', function() {

            var spy = sinon.spy(function() {
                return this.data;
            });

            function TestObject(data) {
                this.data = data;
            };

            TestObject.prototype.toJSON = spy;
            this.model.model = TestObject;
            this.model.initialize(mockData);

            var json = this.model.toJSON();

            expect(spy).to.have.been.callCount(mockData.length);
            expect(json).to.deep.equal(mockData);

        });

    });

    describe('each', function(){

        beforeEach(function() {
            this.model = new Stack(mockData);
        });

        it('calls the callback on every element of the array', function() {
            var spy = sinon.spy();
            this.model.each(spy);

            expect(spy).to.have.been.callCount(mockData.length);
            expect(spy).to.have.been.calledWithExactly(mockData[0], 0, mockData);
            expect(spy).to.have.been.calledWithExactly(mockData[1], 1, mockData);

        });

    });

});
