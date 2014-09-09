// grunt-sed
// =========
// * GitHub: https://github.com/jharding/grunt-sed
// * Copyright (c) 2013 Jake Harding
// * Licensed under the MIT license.

module.exports = function(grunt) {
  var replace = require('replace')
    , _ = grunt.util._
    , log = grunt.log;

  grunt.registerMultiTask('sed', 'Search and replace.', function() {
    var data = this.data;

    if (!data.pattern) {
      log.error('Missing pattern property.');
      return;
    }

    if (_.isUndefined(data.replacement)) {
      log.error('Missing replacement property.');
      return;
    }

    data.path = data.path || '.';

    // `replace` expects a comma-separated list of paths
    if (_.isArray(data.exclude)) {
        data.exclude = data.exclude.join(',');
    }

    replace({
      regex: data.pattern
    , replacement: data.replacement
    , paths: _.isArray(data.path) ? data.path : [data.path]
    , exclude: data.exclude
    , recursive: data.recursive
    , quiet: grunt.option('verbose') ? false : true
    , silent: false
    , async: false
    });
  });
};
