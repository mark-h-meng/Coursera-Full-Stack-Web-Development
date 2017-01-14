var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    ngannotate = require('gulp-ng-annotate'),
    del = require('del');
    

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
                .pipe(jshint())
                .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('clear-cache', function() {
    return cache.clearAll();
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin','copyfonts');
});

// The task below generates an exception if more than one file is found.
// It's a usemin problem: https://github.com/zont/gulp-usemin/issues/91
//
// gulp.task('usemin',['jshint'], function () {
//   return gulp.src([ './app/*.html' ])
//       .pipe(usemin({
//         css:[minifycss(),rev()],
//         js: [ngannotate(),uglify(),rev()]
//       }))
//       .pipe(gulp.dest('dist/'));
// });

var foreach = require('gulp-foreach');

gulp.task('usemin',['jshint'], function () {
    return gulp.src([ './app/**/*.html' ])
        .pipe(foreach(function(stream, file) {
            return stream
                .pipe(usemin({
                    css:[minifycss(),rev()],
                    js: [ngannotate(),uglify(),rev()]
                }))
                .pipe(gulp.dest('dist/'));
        }));            
});

// Images
gulp.task('imagemin', ['clear-cache'], function() {
  return del(['dist/images']), gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('copyfonts', ['clean'], function() {
    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
      // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/images/**/*.png',
        'app/scripts/**/*.js',
        'dist/**/*'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "dist",
            index: "index.html"
        },
        // Needed for Cloud9. Usually needs manual reload.
        port: process.env.PORT,
        host: process.env.IP
    });
    
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', browserSync.reload);
});
