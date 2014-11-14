
var gulp = require('gulp');
var browserify = require('browserify');
var es6ify = require('es6ify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var paths = {
    js: {
        dist: './assets/dist/scripts/',
        src:  './assets/src/scripts/'
    }
};

gulp.task('copy:runtime', function () {
    return gulp.src(es6ify.runtime).pipe(gulp.dest(paths.js.dist));
});

gulp.task('js', ['copy:runtime'], function() {

    es6ify.traceurOverrides = {experimental: true};

    browserify({
        entries: [paths.js.src + 'main.jsx'],
        debug: true,
        extensions: ['.js', '.jsx']
    })
        .transform(reactify)
        .transform(es6ify.configure(/.jsx?/))
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.js.dist));

});

gulp.task('watch:js', function () {
   gulp.watch(paths.js.src + '**/*.{js,jsx}', ['js']);
});
