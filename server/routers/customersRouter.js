const Router = require("koa-router");
const customerController = require("../controllers/customerController");

var router = new Router();

router.get("/getCustomers", async ctx => {
  ctx.body = await customerController.getCustomersByCondition(ctx.query);
});

router.post("/addCustomer", async ctx => {
  ctx.body = await customerController.addCustomer(ctx.request.body);
});

router.delete("/deleteCustomers", async ctx => {
  ctx.body = await customerController.deleteCustomers(ctx.request.body);
});

router.post("/updateCustomer", async ctx => {
  ctx.body = await customerController.updateCustomer(ctx.request.body);
});

module.exports = router.routes();
