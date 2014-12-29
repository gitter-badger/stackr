
const Immutable = require('immutable');

module.exports = {
    eq: function(id) {
        return function (element) {
            return element.id === id;
        }
    },
    gt: function(id) {
        return function (element) {
            return element.id > id;
        }
    },
    lt: function(id) {
        return function (element) {
            return element.id < id;
        }
    },
    gte: function(id) {
        return function (element) {
            return element.id >= id;
        }
    },
    lte: function(id) {
        return function (element) {
            return element.id <= id;
        }
    }
}
