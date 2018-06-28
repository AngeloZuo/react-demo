const Router = require("koa-router");
var router = new Router();

const authController = require("../controllers/authController");

router.post("/auth", async ctx => {
    const result = await authController.authUser(ctx.request.body);
    ctx.body = result;
});

module.exports = router.routes();
