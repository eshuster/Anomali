'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['v1.1'],
      assets: ['./public'],
      css: ['./public/app.scss'],
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false,
          noCache: true
        },
        files: {
          '<%= project.assets %>/app.css':'<%= project.css %>'
        }
      }
    },
    watch: {
      sass: {
        files: './{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'watch'
  ]);

};