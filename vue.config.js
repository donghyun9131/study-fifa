const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('videos')
      .test(/\.(mov|mp4|webm)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'videos/[name].[hash:8].[ext]'
      })
      .end()
  }
})
