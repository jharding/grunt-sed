module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        // enforcing options
        curly: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: true,
        regexp: true,
        trailing: true,

        // relaxing options
        boss: true,
        eqnull: true,
        expr: true,

        // environments
        browser: true,
        jquery: true
      }
    , src: ['tasks/*.js']
    , tests: ['test/*.js']
    , gruntfile: ['Gruntfile.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
