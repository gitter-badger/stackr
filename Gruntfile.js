
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

    grunt.registerTask('build', [
        'browserify',
        'uglify',
        'sass'
    ]);

};
