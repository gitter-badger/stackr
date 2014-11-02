
var _ = require('underscore');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Initialize base config
    var config = {
        dirs: {
            src:  'assets/src',
            dist: 'assets/dist'
        }
    };

    // Load grunt configuration from js files in tasks folder
    config = _.extend(config, require('load-grunt-configs')(grunt,  {
        config: {
            src: 'tasks/*.js'
        }
    }));

    grunt.initConfig(config);

    grunt.registerTask('compile', [
        'browserify:dev',
        'sass'
    ]);

    grunt.registerTask('build', [
        'browserify:dist',
        'uglify',
        'sass'
    ]);

    grunt.registerTask('heroku:development', 'compile');
    grunt.registerTask('heroku:production', 'build');

    grunt.registerTask('lint', ['jshint', 'jscs']);

};
