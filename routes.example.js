const routes = {
    '^/myjstor': 'http://127.0.0.1:8002',
    '^/citation': 'http://127.0.0.1:8001',
    '/': 'http://firefly.jstor.org' // this provides the default fallback to firefly
};

module.exports = routes;
