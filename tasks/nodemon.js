
module.exports = {
    dev: {
        script: 'index.js',
        options: {
            ext: 'js,hbs',
            nodeArgs: ['--harmony'],
            ignore: ['node_modules/**', 'tasks/**']
        }
    }
};
