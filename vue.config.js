const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },//开启代理服务器方式一
  devServer: {
    proxy: {
      '/atguigu': {//请求前缀
        target: 'http://localhost:5000',
        pathRewrite: { "^/atguigu": "" },//将路径重写，使用正则表达式去掉atguigu前缀
        ws: true,//用于支持websocket
        changeOrigin: true//说谎，问数据来自哪里，说谎的话就是说服务器端口是多少他就回答多少，用于控制请求头中的host值
      },
      "/demo": {
        target: 'http://localhost:5001',
        pathRewrite: { "^/demo": "" },
        ws:true
      }
    },//开启代理服务器方式二
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}