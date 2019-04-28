const path = require('path')
const appConfig = require('./src/app.config')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: path.resolve(__dirname, './build'),
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    // Provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: false,
  },
  // Configure Webpack's dev server.
  // https://cli.vuejs.org/guide/cli-service.html
  devServer: {
    ...(process.env.VUE_APP_API_BASE_URL // Proxy API endpoints to the production base URL.
      ? {
          proxy: {
            '/api': {
              target: process.env.VUE_APP_API_BASE_URL,
            },
          },
        } // Proxy API endpoints a local mock API.
      : { before: require('./tests/mock-api') }),
  },
}
