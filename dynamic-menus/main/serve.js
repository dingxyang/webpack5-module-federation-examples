var express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(express.static("dist"));


app.use(
    "/child1",
    createProxyMiddleware({
      target: "http://localhost:3002", // 开发库
      changeOrigin: true,
      pathRewrite: {
        "^/child1": "/", // rewrite path
      },
    })
  );

app.use(
  "/child2",
  createProxyMiddleware({
    target: "http://localhost:3003", // 开发库
    changeOrigin: true,
    pathRewrite: {
      "^/child2": "/", // rewrite path
    },
  })
);

app.listen(3000);
