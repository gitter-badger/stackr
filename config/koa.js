
const
    router     = require('koa-router'),
    hbs        = require('koa-hbs'),
    bodyParser = require('koa-bodyparser'),
    session    = require('koa-generic-session'),
    logger     = require('koa-logger'),
    serve      = require('koa-static'),
    passport   = require('./auth');


module.exports = function(app) {

    // body parser
    app.use(bodyParser());

    app.use(serve('./assets/dist'));

    // Sessions
    app.keys = ['stackr'];
    app.use(session({
        store: require('./redis-store')
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(hbs.middleware({
      viewPath: __dirname + '/../views',
      layoutsPath: __dirname + '/../views/layouts',
      defaultLayout: 'main'
    }));

    app.use(logger());

    app.use(router(app));

};
