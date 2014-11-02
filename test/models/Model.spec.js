
var expect = require('chai').expect,
    Model = require('../../models/Model');

var mockData = {
    foo: 'bar',
    colour: 'green'
};

describe('Model', function(){

    describe('Initialization', function(){

        it('should be instantiable without data', function() {
            var model = new Model();
            expect(model).not.to.be.null;
            expect(model).not.to.be.undefined;
            expect(model).to.be.a('object');
        });

        it('should be instantiable with data', function() {
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

        it('should set correct new values', function() {
            this.model.set('size', 20);
            expect(this.model.data.size).to.equal(20);
        });

        it('should replace existing values', function() {
            this.model.set('colour', 'blue');
            expect(this.model.data.colour).to.equal('blue');
        });

    });

    describe('getters', function() {

        beforeEach(function() {
            this.model = new Model(mockData);
        });

        it('should return the correct value', function() {
            expect(this.model.get('foo')).to.equal('bar');
            expect(this.model.get('colour')).to.equal('green');
            expect(this.model.get('nokey')).to.be.undefined;
        });

    });

});
