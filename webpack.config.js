/* eslint-disable no-undef*/
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ['transform-decorators-legacy' ],
					presets: ['react', 'es2015', 'stage-1']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
