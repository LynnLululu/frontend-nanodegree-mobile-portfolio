// Wrapper function
module.exports = function(grunt) {               

  // Project configuration.
  grunt.initConfig({

    // Task configuration
    pkg: grunt.file.readJSON('package.json'),

    //jshint
    jshint: {
      all: ['src/**/*.js']
    },

    //uglify
    uglify: {
      conpressjs: {
        files: {
          'dist/**/*.js': 'src**/*.js'
        }
      }
    },

    //htmlmin
    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          'dist/**/*.html': 'src/**/*.html',     // 'destination': 'source' 
        }
      }
    },

    //cssmin
   cssmin: {
      target: {
        files: [{
        expand: true,        // 启用下面的选项
        cwd: 'src/css',    // 指定待压缩的文件路径
        src: ['**/*.css', '!**/*.min.css'],    // 匹配相对于cwd目录下的所有css文件(排除.min.css文件)
        dest: 'dist/css',    // 生成的压缩文件存放的路径
        ext: '.css'       // 若替换成'.min.css'生成的文件都使用.min.css替换原有扩展名，生成文件存放于dest指定的目录中
        }]
      }
    }

    //imagemin
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/'
            }]
        }
    }
  });

  // Load the plugin that provides the task(s).
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('compressjs', ['jshint','uglify']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['jshin']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['imagemin']);

};