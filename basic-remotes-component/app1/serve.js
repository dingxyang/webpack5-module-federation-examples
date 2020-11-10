var express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(express.static("dist"));


app.use(
    "/app2",
    createProxyMiddleware({
      target: "http://localhost:3002", // 开发库
      changeOrigin: true,
      pathRewrite: {
        "^/app2": "/", // rewrite path
      },
    })
  );

app.listen(3000);
