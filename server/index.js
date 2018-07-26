const Koa = require("koa");
const app = new Koa();
var bodyParser = require("koa-bodyparser");

const combineRouters = require("./router");

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:9090");
  await next();
});

for (let i = 0; i < combineRouters.length; i++) {
  app.use(combineRouters[i]);
}

module.exports = app;
