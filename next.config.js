const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(
  withSass({
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
    webpack: function(config) {
      // custom configs
      return config;
    }
  })
);
