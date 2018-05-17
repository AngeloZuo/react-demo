const route = require('koa-route');
const customerService = require("../services/customerService")

const customerRouters = [
    route.get('/getCustomer', async ctx => {
        ctx.body = await customerService.getCustomersData();
    }),

    route.get('/getCustomer/:id', (ctx, id) => {
        ctx.body = customerService.test(id);
    })
];

module.exports = customerRouters;