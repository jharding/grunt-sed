module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
      // enforcing options
        curly: true
      , forin: true
      , indent: 2
      , maxlen: 80
      , newcap: true
      , noarg: true
      , noempty: true
      , nonew: true
      , quotmark: true
      , undef: true
      , unused: true

      // relaxing options
      , boss: true
      , expr: true
      , laxcomma: true

      // environments
      , node: true
      }
    , tasks: ['tasks/*.js']
    , tests: ['test/*.js']
    , gruntfile: ['Gruntfile.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('lint', 'jshint');
};
