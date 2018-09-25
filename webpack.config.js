const path = require('path');
var Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/scripts/index'
	],
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/scripts/',
		filename: 'main.js',
	},
	plugins: [
		new DashboardPlugin(dashboard.setData)
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};