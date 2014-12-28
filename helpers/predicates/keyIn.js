
const Immutable = require('immutable');

module.exports = function keyIn() {
    var keySet = Immutable.Set(arguments);
    return function (v, k) {
        return keySet.has(k);
    }
}
