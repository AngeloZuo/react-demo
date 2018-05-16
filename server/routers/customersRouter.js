const route = require('koa-route');

const getCustomerRouter = route.get('/getCustomer', ctx => {
    ctx.body = `getCustomer`;
});

module.exports = getCustomerRouter;