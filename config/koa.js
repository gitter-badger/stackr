
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

    // Serve static files
    app.use(serve('./assets/dist'));

    // Sessions
    app.keys = ['stackr'];
    app.use(session({
        store: require('./redis-store')
    }));

    // Initialize authentication and sessions
    app.use(passport.initialize());
    app.use(passport.session());

    // View rendering using handlebars
    app.use(hbs.middleware({
      viewPath: __dirname + '/../views',
      layoutsPath: __dirname + '/../views/layouts',
      defaultLayout: 'main'
    }));

    // Logger
    app.use(logger());

    // Router
    app.use(router(app));

    app.use(function *(next) {
        try {
            yield next;
        } catch (err) {
            this.status = err.status || 500;
            this.body = err.message;
            this.app.emit('error', err, this);
      }
    });

};
