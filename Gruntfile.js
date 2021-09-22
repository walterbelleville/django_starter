module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', '/static/scripts/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    sass: {                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          '/static/build/stylesheets/styles.css': '/static/styles/styles.sass'       // 'destination': 'source'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('jshint', ['jshint']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('build', ['sass']);

};