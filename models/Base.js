
function Base(data) {
    this.initialize(data);
}

Base.prototype = {

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
    }

}

module.exports = Base;
