const userHome = process.env.HOME;

const config = {
	pathToAssets: `${userHome}/source/jstor/ui-assets`, // must be the absolute path
	portToProxyTo: 8000, // everything proxys to localhost:8000 or the port of your choice
};

module.exports = config;
