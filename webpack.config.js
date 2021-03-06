const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		app: './example/main.tsx'
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules|dist|prebuilt|prebuilt_minified/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules|dist|prebuilt|prebuilt_minified/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			},
			{
				test: /\.(svg|eot|woff|woff2|ttf)$/,
				exclude: /dist/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		publicPath: './dist/',
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		watchContentBase: true,
		publicPath: '/dist/',
		hot: true,
		contentBase: ['.'],
		inline: true
	},
	optimization: {
		usedExports: true
	}
};
