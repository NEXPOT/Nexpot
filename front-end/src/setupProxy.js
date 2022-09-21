const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr/B551011/KorService',
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};