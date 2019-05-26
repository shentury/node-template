const express = require("express");
const http = require("http");
const app = express();
// middle-wares
require('./middlewares')(app);
//routers
app.use("/v1", require("./routers"));
//error handle
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});
//
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  const mode = process.env.NODE_ENV || "development";
  console.info(`server is listening on ${port} with ${mode}`);
});
