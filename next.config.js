const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = withImages(
  withSass({
    target: 'server',
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/services': { page: '/services' },
          '/work': { page: '/work' },
          '/contact': { page: '/contact' },
          '/allclients': { page: '/allclients' }
        }
      },
      webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({ 'global.GENTLY': false }),
        );
        return config;
    },
  })
);
