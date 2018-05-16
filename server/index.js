const Koa = require('koa');
const app = new Koa();

const index = require('./router');
const customerRouter = require('./routers/customersRouter');

app.use(router);
app.use(customerRouter);

module.exports = app;