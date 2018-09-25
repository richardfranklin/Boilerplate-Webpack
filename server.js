const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const opn = require('opn');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
	quiet: true, // For WebpackDashboard
}).listen(3000, 'localhost', (err) => {
	if (err) console.error(err);
	opn('http://localhost:3000');
	console.log('Listening at localhost:3000');
});
