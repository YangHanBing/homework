const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    port: 9999,
    https: false,
    host: 'localhost',
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_API_DEV_TARGET, // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: ''
        }
      }
      // [process.env.VUE_APP_API1]: {
      //   target: process.env.VUE_API_DEV_TARGET1, // API服务器的地址
      //   changeOrigin: true,
      //   pathRewrite: {
      //     [`^${process.env.VUE_APP_API1}`]: ''
      //   }
      // }
    }
  }
})
