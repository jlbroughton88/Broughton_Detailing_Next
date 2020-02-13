const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = withImages(
  withSass({
    target: 'serverless',
    env: {
      HOST: process.env.HOST,
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
      DATABASE: process.env.DATABASE
    },
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
        return config;
    },
  })
);
