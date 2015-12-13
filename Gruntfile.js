module.exports = function(grunt) {

	grunt.initConfig({
		aws: grunt.file.readJSON('aws.json'),

		shell: {
				clean: {
					command: 'hexo clean'
				},

				generate: {
					command: 'hexo generate'
				},

				server: {
					command: 'hexo server'
				},

				sync: {
					command: 'aws s3 sync public s3://dengkunli.com --exclude *.tmp'
				}
		},
		
	});

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('clean', ['shell:clean']);
	grunt.registerTask('generate', ['shell:generate']);
	grunt.registerTask('server', ['shell:server']);
	grunt.registerTask('deploy', ['shell:generate','shell:sync']);
	grunt.registerTask('default', ['server']);
};