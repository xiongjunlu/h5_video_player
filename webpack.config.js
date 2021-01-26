// webpack.config.js
const path = require('path');

module.exports = {
	// mode: 'production',
	entry: './src/video-player.js',
	output: {
		filename: 'video-player.js',
		path: path.resolve(__dirname, 'dist')
	},
  module: {
    rules: [
			{
				// 命中 JavaScript 文件
				test: /\.js$/,
				// 用 babel-loader 转换 JavaScript 文件
				// ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
				use: ['babel-loader?cacheDirectory'],
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, 'src')
			}
		]
  }
};
