const express = require("express");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const favicon = require("serve-favicon");

app.prepare().then(() => {
  express()
    .use(favicon(__dirname + "/static/favicon.ico"))
    .use(handler)
    .listen(3000);
});
