var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var opn = require('opn');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    quiet: true, // For WebpackDashboard
}).listen(3000, 'localhost', function(err, results) {
    if (err) console.error(err);
    opn('http://localhost:3000');
    console.log('Listening at localhost:3000');
});