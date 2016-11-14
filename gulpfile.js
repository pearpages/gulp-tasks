var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var inject = require('gulp-inject');
var serve = require('gulp-serve');

gulp.task('default', function (callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', 'index', 'serve', callback);
});

gulp.task('clean', function() {
    return del(['./build'], {force:true});
});

gulp.task('serve', serve('build'));

gulp.task('index', function () {
    var tpl_src = ['./build/vendor/**/*.js',
    './build/app/**/*.module.js',
    './build/app/**/*.js',
    '!./build/app/**/*.spec.js',
    './build/assets/css/**/*.css'
    ];
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build'));
});

// dependencies are run before
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-app-js', function () {
        return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});