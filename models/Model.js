
function Model(data) {
    this.initialize(data);
}

Model.prototype = {

    initialize: function(data) {
        this.setData(data);
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
