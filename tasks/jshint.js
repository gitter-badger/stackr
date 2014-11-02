
module.exports = function(grunt) {

    return {

        options: grunt.file.readJSON('./.jshintrc'),

        server: {
            options: {
                node: true,
                esnext: true
            },
            files: {
                src: [
                    '**/*.js',
                    '!node_modules/**/*.js',
                    '!assets/**/*.js'
                ]
            }
        }

    };

};
