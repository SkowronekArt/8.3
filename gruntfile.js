module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		jshint: {
			all: ['js/*.js']
		},

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'style.css': 'style.sass'
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'style.css',
						'index.html'
					]
				},
				options: {
					watchTask: true, 
						server: './'
					}
				}
			}
	});
		

	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	
	// Default task(s).
	grunt.registerTask('default', ['browserSync', 'imagemin', 'jshint', 'watch']);
	
};