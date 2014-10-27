
const
    Router = require('koa-router'),
    router = new Router();

require('./twitter')(router);

router.get('/', function *() {
    yield this.render('landing', {title: 'stackr'});
});

module.exports = router;
