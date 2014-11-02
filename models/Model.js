
var _ = require('underscore');

function Model(data) {
    this.initialize(_.clone(data));
}

Model.prototype = {

    initialize: function(data) {
        this.setData(data);
    },

    get: function(key) {
        return this.data[key];
    },

    set: function(key, value) {
        this.data[key] = value;
    },

    setData: function(data) {
        this.data = this.parse(data);
    },

    parse: function(data) {
        return data;
    },

    toJSON: function() {
        return this.data;
    },

    toJSONString: function() {
        return JSON.stringify(this.toJSON());
    }

};

module.exports = Model;
