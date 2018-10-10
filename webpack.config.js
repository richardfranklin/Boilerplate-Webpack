const path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/scripts/index',
	],
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/scripts/',
		filename: 'main.js',
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
					{
						loader: 'eslint-loader',
					},
				],
			},
		],
	},
};
