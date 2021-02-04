const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['tray-window-state-manager'],
      builderOptions: {
        extraResources: [
          {
            "from": "src/assets",
            "to": "resources",
            "filter": [
              "**/*"
            ]
          }
        ]
      }
    }
  }
}
