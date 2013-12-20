module.exports = function(grunt) {
  grunt.initConfig({
    sed: {
      options: {
        path: 'test.txt'
      }
    , test1: {
        pattern: 'search'
      , replacement: 'replace'
      , path: 'test.txt'
      }
    , test2: {
        pattern: /\d\d\d\d/
      , replacement: 'endOfWorld'
      , path: 'test.txt'
      }
    , test3: {
        pattern: 'LOWERCASE'
      , replacement: function(match) { return match.toLowerCase(); }
      , path: 'test.txt'
      }
    , test4: {
        pattern: /Y/g
      , replacement: 'Z'
      , path: 'test.txt'
      }
    , test5: {
        pattern: 'replace'
      , replacement: 'anotherReplace'
      }
    }
  });

  grunt.loadTasks('../tasks');
};
