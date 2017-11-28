module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: { //build
          build: {
            cwd: '_dev',
            src: [ '**/*.*', '!css/**/*.*', '!_*/**/*.*'], // css copy is handled by postcss
            dest: '',
            expand: true
          }
        },
       
        htmlhint: { // watch
            index: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'attr-no-duplication': true,
                    'tag-self-close': true,
                    'style-disabled': true
                },
                src: ['_dev/index.html']
            }
        },
        jshint: { //watch
            options: {
                
              curly: true,
              eqeqeq: true,
              esversion: 6,
              eqnull: true,
              browser: true,
              devel: true,
              globals: {
                d3: true,
                mapboxgl: true,
                PubSub: true
              },
              loopfunc: true, // allow loop functions to supress false positive error ofcalling functions
                              // in a loop with outer-scoped variable. jshint bug: it should be honoring let variables
              undef: true,
              unused: true,
              validthis: true // Tolerate using this in a non-constructor; js hint is not distinguishing
                              // function invocations where `this` may be undefined from method invocations
                              // (functions that are properties of an object) where `this` is the owning object
            },
            files: {
                src: ['_dev/js/index.js']
            }

        },
        browserify: { //build
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'js/index.js': 'js/index.js'
                },
                options: {
                    transform: [['babelify', { presets: "env" }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        uglify: { // build
            options: {
              mangle: {
                reserved: ['d3','mapboxgl','PubSub']
              },
              compress: {
                drop_console: true
              }
            },
            min: {
                files: grunt.file.expandMapping(['*.js','!min.js'], 'js/', {
                    cwd: 'js',
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.js', '.js'); 
                    }
                }),
                options: {
                    sourcemap: 'auto'
                }
            }
        },
        sass: { //watch
            build: {
                files: grunt.file.expandMapping(['_dev/css/*.scss'], '', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.scss', '.css');
                    }
                })
            }
        },
        cssmin: { // build
            build: {
                files: [{
                  expand: true,
                  cwd: 'css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css/',
                  ext: '.css'
                }]
            }
        },
        watch: {
            html: {
                files: ['_dev/*.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['_dev/js/*.js'],
                tasks: ['jshint']
            },
            scss: {
                files: ['_dev/css/*.scss'], 
                tasks: ['sass']
            }
        },
        
        postcss: { // build
            options: {
                 processors: [
                    require('postcss-import')(),
                    require('autoprefixer')({browsers:['>1%','last 2 versions']})
                 ]
            },
            dist: {
                 src: '_dev/css/index.css',
                dest: 'css/index.css'
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask(
      'build', 
      'Copies specified _dev files files to the root directory.', 
      [ 'copy', 'browserify', 'postcss', 'uglify', 'cssmin' ]
    );

};