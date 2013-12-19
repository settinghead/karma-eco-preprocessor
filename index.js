var eco = require('eco');
var path = require('path');
var createEcoPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.eco');
  var defaultOptions = {
    bare: true,
    sourceMap: false
  };
  var options = helper.merge(defaultOptions, args.options || {}, config.options || {});

  var transformPath = args.transformPath || config.transformPath || function(filepath) {
    return filepath.replace(/\.eco$/, '.js');
  };

  return function(content, file, done) {
    var result = null;
    var map;
    var datauri;

    log.debug('Processing "%s".', file.originalPath);
    file.path = transformPath(file.originalPath);

    // Clone the options because eco.compile mutates them
    var opts = helper._.clone(options)

    try {
      result = eco.compile(content, opts);
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location.first_line);
      return;
    }

    done(result.js || result)
  };
};

createEcoPreprocessor.$inject = ['args', 'config.ecoPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:eco': ['factory', createEcoPreprocessor]
};
