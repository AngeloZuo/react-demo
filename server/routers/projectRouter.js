const Router = require("koa-router");
var router = new Router();

const projectController = require("../controllers/projectController");

router.post("/projects", async ctx => {
  const result = await projectController.getProjects(ctx.request.body);
  ctx.body = result;
});

module.exports = router.routes();
