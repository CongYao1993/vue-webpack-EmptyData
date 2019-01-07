const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'), // 指定模板页面
      filename:'index.html', // 指定生成页面名称，浏览器默认打开index.html
      title:'Output Management'
    }),
    new VueLoaderPlugin()
  ],
  module:{ // 配置所有第三方模块的加载器
    rules:[ // 所有第三方模块的匹配规则
      {test:/\.css$/,use:['style-loader','css-loader']}, // 加载.css文件
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, // 加载.less文件
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}, // 加载.scss文件
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=58453&name=[name].[ext]'}, // 处理图片
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}, // 处理字体文件
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}, // 配置Babel转换高级的ES语法
      {test:/\.vue$/,use:'vue-loader'} // 配置.vue文件
    ]
  },
  mode:'development' // 开发模式
}