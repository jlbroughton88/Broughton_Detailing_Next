const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require("next-fonts");

module.exports = withImages(withSass({
  distDir: "_next",
  target: "serverless",
    cssModules: true,
    webpack (config, options) {
      config.module.rules.push({
          // test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
          // use: {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 8192,
          //     publicPath: '/_next/static/',
          //     outputPath: 'static/',
          //     name: '[name].[ext]'
          //   }
          // }
      })
      return config;
  }
  }));
