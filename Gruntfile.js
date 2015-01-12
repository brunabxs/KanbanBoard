module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'test/**/*.js', 'public/js/*.js']
    },
    jasmine : {
      components : {
        src : ['public/js/controller.js'],
        options : {
          specs : 'test/*Spec.js',
          keepRunner : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('travis', ['jshint','jasmine']);
};
