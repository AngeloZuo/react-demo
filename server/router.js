const _ = require("lodash");
const indexRouter = require("./routers/indexRouter");
const customersRouter = require("./routers/customersRouter")

module.exports = _.concat(indexRouter, customersRouter);