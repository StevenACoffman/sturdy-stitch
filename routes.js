const routes = {
	// '^/myjstor': 'http://127.0.0.1:8002',
	'^/citation': 'https://firefly.jstor.org',
	'^/action': 'https://firefly.jstor.org',
	// '^/api': 'http://firefly.jstor.org/api',
	// '^/analyze': 'http://127.0.0.1:4200',
	'^/api/labs-solr-service': 'https://www.jstor.org', // this provides the default fall back to firefly
	'^/api': 'https://firefly.jstor.org', // this provides the default fall back to firefly
	'^/workspace-service': 'http://firefly.jstor.org', // this provides the default fall back to firefly
  '^/analyze': 'https://firefly.jstor.org',
  '^/subjects': 'https://firefly.jstor.org',
  '^/publishers': 'https://firefly.jstor.org',
  '^/dfr': 'https://firefly.jstor.org',
  '^/assets': 'https://firefly.jstor.org',
  '^/labs-ugw-service': 'https://firefly.jstor.org',
  '^/understand': 'https://firefly.jstor.org',
	'^/': 'http://localhost:3000',

};

module.exports = routes;
