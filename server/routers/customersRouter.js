const Router = require('koa-router');
const customerController = require("../controllers/customerController");

var router = new Router();

router.get('/getCustomers', async ctx => {
    const customerData = await customerController.getCustomersByCondition(ctx.query);
    ctx.body = customerData;
})

router.post('/addCustomer', async (ctx, id) => {
    const result = await customerController.addCustomer(ctx.request.body);
    ctx.body = result;
})

router.delete('/deleteCustomers', async (ctx, id) => {
    const result = await customerController.deleteCustomers(ctx.request.body);
    ctx.body = result;
})

router.post('/updateCustomer', async (ctx, id) => {
    const result = await customerController.updateCustomer(ctx.request.body);
    ctx.body = result;
})

module.exports = router.routes();