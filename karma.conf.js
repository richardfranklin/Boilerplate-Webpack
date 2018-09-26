const webpack = require('karma-webpack');

// Karma configuration
module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'src/tests/**/*_test.js',
		],
		plugins: [
			webpack,
			'karma-chrome-launcher',
			'karma-jasmine',
			// 'karma-phantomjs-launcher',
			'karma-jasmine-html-reporter',
			'karma-coverage',
			'karma-spec-reporter',
			'karma-htmlfile-reporter',
			'es6-shim',
		],
		webpack: {
			mode: 'development',
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
						],
					},
				],
			},
		},
		webpackMiddleware: {
			noInfo: true,
		},
		htmlReporter: {
			outputFile: 'results/unit-tests.html'
		},
		// list of files / patterns to exclude
		exclude: [
		],
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'src/tests/**/*_test.js': ['webpack'],
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'kjhtml', 'coverage', 'html', 'spec'],
		coverageReporter: {
			dir: 'coverage',
			reporters: [{
				type: 'html',
			}],
		},
		// Prints detailed results to console
		specReporter: {
			maxLogLines: 50, // limit number of lines logged per test
			suppressErrorSummary: false, // do not print error summary
			suppressFailed: false, // do not print information about failed tests
			suppressPassed: false, // do not print information about passed tests
			suppressSkipped: false, // do not print information about skipped tests
			showSpecTiming: true, // print the time elapsed for each spec
			failFast: false, // test would finish with error when a first fail occurs.
		},
		// web server port
		port: 9876,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,
		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,
	});
};
