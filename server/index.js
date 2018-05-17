const Koa = require('koa');
const app = new Koa();

const combineRouters = require('./router');

for (let i = 0; i < combineRouters.length; i++) {
    app.use(combineRouters[i]);
}

module.exports = app;