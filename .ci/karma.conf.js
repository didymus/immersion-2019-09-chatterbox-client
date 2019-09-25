module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/underscore/underscore.js',
      'node_modules/chai/chai.js',
      'node_modules/sinon/pkg/sinon.js',

      '.ci/init.js',

      'client/env/config.js',
      'client/scripts/*.js',

      'test/chatterboxSpec.js',
    ],
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
