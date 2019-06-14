const express = require('express');
const proxy = require('http-proxy-middleware');
const routes = require('./routes');
const config = require('./config');

const app = express();

const localStaticAssetsDir = config['pathToAssets']; // explicit path may be necessary here
app.use(localStaticAssetsDir, express.static(localStaticAssetsDir));

for (let key in routes) {
	app.use(
        key,
        proxy({
	target: routes[key],
	changeOrigin: true,
	autoRewrite: true,
	protocolRewrite: 'http',
	cookieDomainRewrite: {localhost: 'firefly.jstor.org'},
})
    );
}

app.listen(config['portToProxyTo']);
