
module.exports = {

    dev: {
        files: [{
            expand: true,
            cwd:  '<%= dirs.dist %>/images',
            src:  '**/*.{png,gif,jpeg,jpg,svg}',
            dest: '<%= dirs.dist %>/images/'
        }]
    },

    options: {
        optimizationLevel: 7,
        interlaced: false
    }

};
