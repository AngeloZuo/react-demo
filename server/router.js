const route = require('koa-route');

const index = route.get('/', ctx => {
    ctx.body = `Homepage`;
});

module.exports = index;