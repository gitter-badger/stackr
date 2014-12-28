
const client = require('../helpers/redis-client');

module.exports = {

    get: function* (key) {
        return yield client.get(key);
    },

    set: function(key, value) {
        client.setex(key, 21600, JSON.stringify(value));
    }

}
