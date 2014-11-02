
var chai   = require('chai'),
    sinon  = require('sinon'),
    expect = chai.expect,
    Model  = require('../../models/Model');

chai.use(require('sinon-chai'));

var mockData = {
    foo: 'bar',
    colour: 'green'
};

describe('Model', function(){

    describe('Initialization', function(){

        it('is instantiable without data', function() {
            var model = new Model();
            expect(model).not.to.be.null;
            expect(model).not.to.be.undefined;
            expect(model).to.be.a('object');
        });

        it('is instantiable with data', function() {
            var model = new Model(mockData);
            expect(model.data).not.to.be.null;
            expect(model.data).not.to.be.undefined;
            expect(model.data).to.be.a('object');
        });

    });

    describe('setters', function() {

        beforeEach(function() {
            this.model = new Model(mockData);
        });

        it('sets correct new values', function() {
            this.model.set('size', 20);
            expect(this.model.data.size).to.equal(20);
        });

        it('replaces existing values', function() {
            this.model.set('colour', 'blue');
            expect(this.model.data.colour).to.equal('blue');
        });

    });

    describe('getters', function() {

        beforeEach(function() {
            this.model = new Model(mockData);
        });

        it('returns the correct value', function() {
            expect(this.model.get('foo')).to.equal('bar');
            expect(this.model.get('colour')).to.equal('green');
            expect(this.model.get('nokey')).to.be.undefined;
        });

    });

    describe('setData', function() {

        beforeEach(function() {
            this.model = new Model();
        });

        it('sets the right data', function() {
            this.model.setData(mockData);
            expect(this.model.get('foo')).to.equal('bar');
            expect(this.model.get('colour')).to.equal('green');
            expect(this.model.get('nokey')).to.be.undefined;
        });

        it('calls the parse function', function() {
            var spy = sinon.spy(this.model, 'parse');
            this.model.setData(mockData);
            expect(spy).to.have.been.calledWithExactly(mockData);
        });

    });

    describe('toJSON', function() {

        beforeEach(function() {
            this.model = new Model(mockData);
        });

        it('returns data', function() {
            var json = this.model.toJSON();
            expect(json).to.deep.equal(mockData);
        });

    });

    describe('toJSONString', function() {

        beforeEach(function() {
            this.model = new Model(mockData);
        });

        it('returns a string', function() {
            var jsonString = this.model.toJSONString();
            expect(jsonString).to.be.a('string');
        });

        it('returns correct data', function() {
            var parsed = JSON.parse(this.model.toJSONString());
            expect(parsed).to.deep.equal(mockData);
        });

    });

});
