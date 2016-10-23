var path = require('path');

module.exports = {
	entry: "./dist/main.js",
	output: {
		path: path.resolve('dist'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
		]
	}
}
