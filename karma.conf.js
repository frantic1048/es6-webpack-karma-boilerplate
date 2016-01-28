// Karma configuration
var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/index.js',
    ],

    preprocessors: {
      'test/index.js': 'webpack',
    },

    webpack: {

      // webpack configuration
      resolve: {
        extensions: ['', '.js'],
      },

      babel: {
        presets: ['es2015', 'stage-0'],
      },

      isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
          presets: ['es2015', 'stage-0'],
        },
      },

      module: {
        preLoaders: [
          // transpile all files except testing sources with babel as usual
          {
            test: /\.js$/,
            exclude: [
              path.resolve('src/script/'),
              path.resolve('node_modules/'),
            ],
            loader: 'babel',
          },
          // transpile and instrument only testing sources with isparta
          {
            test: /\.js$/,
            include: path.resolve('src/script/'),
            loader: 'isparta'
          },
        ],
      },
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'text',
    },

    port: 33339,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true,

  });
};
