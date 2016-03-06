module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['source/_scss/**/*.scss'],
				tasks: 'sass'
			},
			jekyll: {
				files: ['source/**/*', '!source/_site/**/*'],
				tasks: 'shell'
			},
			options: {
				atBegin: true
			}
		},
		shell: {
			run: {
				command: 'cd source && jekyll build',
				options: {
					nospawn: true
				}
			}
		},
		sass: {
	        dist: {
	            files: {
	                'source/_site/css/style.css': 'source/_scss/style.scss'
	            }
	        }
	    },
		browserSync: {
			bsFiles: {
				src: ['source/_site/**/*.html', 'source/_site/**/*.css']
			},
			options: {
				watchTask: true,
				port: 5000,
				injectChanges: false,
				server: {
					baseDir: "source/_site"
				}
			}

		}
	})
	grunt.registerTask('default', ['browserSync', 'watch']);

};

