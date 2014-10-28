
module.exports = {
    sass: {
        files: '<%= dirs.src %>/styles/**/*.scss',
        tasks: 'sass'
    },
    js: {
        files: ['<%= dirs.src %>/scripts/**/*.js', '<%= dirs.src %>/scripts/**/*.jsx'],
        tasks: 'browserify'
    }
};
