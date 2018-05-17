const route = require('koa-route');

const indexRouters = [
    route.get('/', ctx => {
        ctx.body = `Homepage`;
    })
]

module.exports = indexRouters;