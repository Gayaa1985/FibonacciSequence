"use strict";

const Koa = require("koa");
const router = require("./routes");

const app = new Koa();

// Bootstrap application router
app.use(router.routes());

// Start server
 const server = app.listen(3000, () => {
    console.log(
      "API server listening on port 3000"
    );
  });


// Expose app
module.exports = server;
