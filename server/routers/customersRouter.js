const route = require('koa-route');
const customerController = require("../controllers/customerController");

const customerRouters = [
    route.get('/getCustomers', async ctx => {
        const customerData = await customerController.getCustomersByCondition(ctx.query);
        ctx.body = customerData;
    })

    // route.get('/setCustomers', async (ctx, id) => {
    //     const result = await customerController.addCustomers();
    //     ctx.body = result;
    // })
];

module.exports = customerRouters;