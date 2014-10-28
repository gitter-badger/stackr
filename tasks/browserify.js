
module.exports = {

    options: {
        transform: ['reactify'],
        browserifyOptions: {
            extensions: ['.js', '.jsx']
        },
        debug: true
    },

    dev: {
        src: '<%= dirs.src %>/scripts/main.jsx',
        dest: '<%= dirs.dist %>/scripts/main.js'
    }

};
