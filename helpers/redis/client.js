
const redis = require('redis'),
      thunkify = require('thunkify-wrap');

var client;

if (process.env.REDISTOGO_URL) {
    rtg = require('url').parse(process.env.REDISTOGO_URL);
    console.log('Connecting client cache to Redis with host=' + rtg.hostname + '; port=' + rtg.port + '; pass=' + rtg.auth.split(':')[1]);

    client = redis.createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(':')[1]);

} else {
    console.log('Connecting client cache to Redis');
    client = redis.createClient();
}

module.exports = thunkify(client, 'get');
