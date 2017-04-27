// grunt-sed
// =========
// * GitHub: https://github.com/jharding/grunt-sed
// * Copyright (c) 2013 Jake Harding
// * Licensed under the MIT license.

module.exports = function(grunt) {
  var replace = require('replace')
    , glob = require('glob')
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

    var _paths = [];

    if (_.isArray(data.path)) {
      data.path.map(function(_path) {
        _paths = _paths.concat(glob.sync(_path, {}));
      })
    } else {
      _paths = glob.sync(data.path, {});
    }

    _paths = _paths.filter(function(item, pos) {
      return _paths.indexOf(item) == pos;
    });

    replace({
      regex: data.pattern
      , replacement: data.replacement
      , paths: _paths
      , recursive: data.recursive
      , quiet: grunt.option('verbose') ? false : true
      , silent: false
      , async: false
    });
  });
};
