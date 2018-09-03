var htmlwp = require('html-webpack-plugin');
// 热刷新配置

module.exports={
	entry: "./src/main.js", // 指定打包的入口文件
	output: {
		path: __dirname+"/dist",	// 注意 webpack 1.14.0 要求路径为绝对路径
		filename: "build.js"
	},
	module:{
		rules:[
					{
						test: /\.scss$/,	// 打包 .scss 文件
						// 先用css-loader解析css文件，变为style文件后再用style-loader解析成指令
						use:[ 'style-loader','css-loader','sass-loader' ]
					},
					{
						test: /\.css$/,
						// 先用css-loader解析css文件，变为style文件后再用style-loader解析成指令
						use:[ 'style-loader','css-loader' ]
					},
					{
						test: /\.less$/,	// 打包 .less 文件
						// 先用css-loader解析css文件，变为style文件后再用style-loader解析成指令
						use:[ 'style-loader','css-loader','less-loader' ]
					},
					{
						test: /\.(png|jpg|gif|ttf)$/,	// 打包 url资源 文件
						// 先用css-loader解析css文件，变为style文件后再用style-loader解析成指令
						use:[ 'url-loader?limit=40000' ]	
						// limit 表示限制图片大小为40k为临界值
						// 小于40k的图片均被打包到build.js中去
					},
					{
						test: /\.js$/,	// 将 js 文件中的es6语法转成es5语法
						loader: 'babel-loader',
						exclude: /node_modules/,	//将 node_modules 文件夹的转换排除
						query:{
							presets: [ 'es2015' ],	// 配置将es6语法转换成es5语法的指令
							plugins: [ 'transform-runtime' ]	// 动态编译 vue 文件
						}
					},
					{
						test: /\.vue$/,	// 解析 .vue 组件页面文件
						use: [ 'vue-loader' ]
					},
				]
			},
			plugins: [
				new htmlwp({
					title: '首页',	// 生成的页面标题 <head><title>首页</title></head>
					filename: 'index.html',	// webpack-dev-server 在内存中生成的文件名称
					template: 'index1.html'	// 根据index1.html这个模板来生成，需要自己定义
				})
			]
		}