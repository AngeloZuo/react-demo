const _ = require("lodash");
const indexRouter = require("./routers/indexRouter");
const customersRouter = require("./routers/customersRouter");
const authRouter = require("./routers/authRouter");

module.exports = _.concat(indexRouter, customersRouter, authRouter);
