
module.exports = {

    options: {
        config: '.jscsrc',
        esnext: true
    },

    dist: {
        files: {
            src: [
                '**/*.js',
                '!node_modules/**/*',
                '!<%= dirs.dist %>/**/*'
            ]
        }
    }

};
