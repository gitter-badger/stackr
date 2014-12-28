
const RedisStore = require('koa-redis');

var redisStore, rtg;

if (process.env.REDISTOGO_URL) {
    rtg = require('url').parse(process.env.REDISTOGO_URL);
    console.log('Connecting session store to Redis with host=' + rtg.hostname + '; port=' + rtg.port + '; pass=' + rtg.auth.split(':')[1]);

    redisStore = new RedisStore({
        host: rtg.hostname,
        port: rtg.port,
        pass: rtg.auth.split(':')[1]
    });

} else {
    console.log('Connecting session store to Redis');
    redisStore = new RedisStore();
}

module.exports = redisStore;
