
const
    _      = require('underscore'),
    Model  = require('./Model');

function Stack() {
    Model.apply(this, arguments);
}

Stack.prototype = new Model();

Stack.prototype = _.extend(Stack.prototype, {

    parse: function(data) {

        if(!_.isArray(data)) {
            return [];
        }

        if(this.model) {

            var parsedData = [];

            data.forEach(function(modelData) {
                parsedData.push(new this.model(modelData));
            }, this);

            return parsedData;

        }

        return data;

    },

    toJSON: function() {

        if(this.model) {
            var returnedJSON = [];
            this.each(function(model) {
                returnedJSON.push(model.toJSON());
            });
            return returnedJSON;
        }

        return this.data;

    },

    each: function(cb) {
        return this.data.forEach(cb);
    }

});

module.exports = Stack;
