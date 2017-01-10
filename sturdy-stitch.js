var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({target: 'https://firefly.jstor.org',
	changeOrigin: true,
	autoRewrite: true,
    protocolRewrite: 'http',
    secure: false,
	cookieDomainRewrite: { 'localhost': 'firefly.jstor.org'},
    onProxyRes(proxyRes, req, res) {
        console.error("ON PROXY RES");
        console.log(proxyRes);
        console.log(req);
        console.log(res);
        proxyRes.headers['location'] = '/myjstor/mylists/list/70822/items/';     // add new header to response
    }
}), function (req, res, next) {
  console.log('Request Type:', req.method)
  next();
});

app.listen(4000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar

// if you get an error when trying to
