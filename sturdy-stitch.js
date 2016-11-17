var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

// pretty sure the cookieDomainRewrite is correct, but might be backwards
app.use('/', proxy({target: 'http://firefly.jstor.org',
    changeOrigin: true,
    autoRewrite: true,
    protocolRewrite: true,
    cookieDomainRewrite: { "localhost": "firefly.jstor.org"}
  }));
app.listen(4000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
