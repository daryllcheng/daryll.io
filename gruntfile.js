module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/styles/CSS/main.css': 'public/styles/SCSS/main.scss'
        }
      }
    },

    watch: {
      sass: {
        files: [
          'public/styles/SCSS/**/*.scss'
        ],
        tasks: [
          'sass'
        ]
      },
      scripts: {
        files: [
          'src/bundles/bundle.js'
        ],
        tasks: [
          'uglify'
        ]
      }
    },

    uglify: {
      my_target: {
        files: {
          'src/JS/scripts.js': ['src/bundles/bundle.js']
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['sass']);
}