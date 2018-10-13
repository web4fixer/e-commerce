var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// concat js

gulp.task('scripts', function() {
  return gulp.src('app/js/libs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/'));
});

// concat css

gulp.task('concat-css', function () {
  return gulp.src([
        'app/css/reset.css',
        'app/css/components/*.css',
        'app/css/assets/*.css'
    ])
    .pipe(concatCss("all.css"))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('app/css/'));
});



gulp.task('watch', ['browser-sync', 'scripts', 'concat-css'], function() {
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/css/**/*.css', ['concat-css']);
});

gulp.task('default', ['watch']);