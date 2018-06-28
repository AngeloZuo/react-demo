const Router = require("koa-router");
var router = new Router();

router.get("/", ctx => {
    ctx.body = `Homepage`;
});

module.exports = router.routes();
