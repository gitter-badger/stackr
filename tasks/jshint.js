
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
                    '!node_modules/**/*',
                    '!test/**/*',
                    '!assets/**/*'
                ]
            }
        },

        client: {
            options: {
                node: true,
                browser: true,
                quotmark: false
            },
            files: {
                src: [
                    '<%= dirs.src %>/**/*.js',
                    '<%= dirs.src %>/**/*.jsx'
                ]
            }
        }

    };

};
