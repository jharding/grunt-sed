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

    if (!data.regex) {
      log.error('Missing regex property.');
      return;
    }

    if (!data.replacement) {
      log.error('Missing replacement property.');
      return;
    }

    data.path = data.path || '.';

    replace({
      regex: data.regex
    , replacement: data.replacement
    , path: _.isArray(data.path) ? data.path : [data.path]
    , recursive: data.recursive
    , preview: data.preview
    , ignoreCase: data.ignoreCase
    , multiline: _.isUndefined(data.multiline) ? true : data.multiline
    , include: data.include
    , exclude: data.exclude
    , quiet: grunt.option('verbose') ? false : true
    , silent: false
    , async: false
    });
  });
};
