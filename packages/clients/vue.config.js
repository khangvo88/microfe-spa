const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      // sockPort: 8500,
      // sockHost: "localhost",
      // https: true,
      port: 8500
    },
  },
  chainWebpack: config => {
    // if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
    //   config.plugins.delete("SystemJSPublicPathWebpackPlugin");
    // }

    // config.externals(['vue', 'vue-router']);
  },
  filenameHashing: false
})
