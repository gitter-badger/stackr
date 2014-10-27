
module.exports = {

    options: {
        sourcemap: 'auto',
        style: 'compressed'
    },

    dev: {
        files: {
            '<%= dirs.dist %>/styles/landing.css': '<%= dirs.src %>/styles/landing.scss'
        }
    }

};
