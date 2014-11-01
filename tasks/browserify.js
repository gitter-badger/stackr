
module.exports = {

    options: {
        transform: ['reactify'],
        browserifyOptions: {
            extensions: ['.js', '.jsx']
        }
    },

    dev: {
        options: {
            debug: true
        },
        src: '<%= dirs.src %>/scripts/main.jsx',
        dest: '<%= dirs.dist %>/scripts/main.js'
    },

    dist: {
        src: '<%= dirs.src %>/scripts/main.jsx',
        dest: '<%= dirs.dist %>/scripts/main.js'
    }

};
