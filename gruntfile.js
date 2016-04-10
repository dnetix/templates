module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            dev: {
                files: ['madmin/src/js/*', 'madmin/src/less/*.less'],
                tasks: ['dev'],
                options: {
                    spawn: false
                }
            }
        },
        less: {
            dev: {
                options: {
                    compress: false
                },
                files: {
                    'madmin/css/style.css' : 'madmin/src/less/style.less'
                }
            },
            build: {
                options: { compress: true },
                files: { 'madmin/css/style.min.css': 'madmin/src/less/style.less' }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:build']);
    grunt.registerTask('dev', ['less:dev']);

};