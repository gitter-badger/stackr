
const app = require('koa')(),
      port = process.env.PORT || 3000;;

require('./config/koa')(app);
app.use(require('./controllers/index').middleware());

app.listen(port);
console.log('listening on port ' + port);
