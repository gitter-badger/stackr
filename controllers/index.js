
const
    Router   = require('koa-router'),
    router   = new Router();

// Load Twitter router
require('./auth')(router);

// Load base router
require('./base')(router);

module.exports = router;
