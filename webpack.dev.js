const merge = require('webpack-merge');
const baseConfig  = require('./webpack.base');

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	}
});
