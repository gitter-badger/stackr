
const
    Router   = require('koa-router'),
    router   = new Router();

// Load Twitter router
require('./twitter')(router);

// Load base router
require('./base')(router);

module.exports = router;
