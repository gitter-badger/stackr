
const app = require('koa')();

require('./config/koa')(app);
app.use(require('./controllers/public').middleware());
app.use(require('./controllers/secure').middleware());

app.listen(3000);
