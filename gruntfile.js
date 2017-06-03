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

    autoprefixer: {
      dist: {
        files: {
          'public/styles/CSS/main.css': 'public/styles/CSS/main.css'
        }
      }
    },

    watch: {
      sass: {
        files: [
          'public/styles/SCSS/**/*.scss'
        ],
        tasks: [
          'sass', 
          'autoprefixer'
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
          'src/js/scripts.js': ['src/bundles/bundle.js']
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify']);
}