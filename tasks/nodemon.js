
module.exports = {
    dev: {
        script: 'server.js',
        options: {
            ext: 'js,hbs',
            nodeArgs: ['--harmony'],
            ignore: ['node_modules/**', 'tasks/**', 'assets/**']
        }
    }
};
