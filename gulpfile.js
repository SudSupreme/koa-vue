const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
const browsersync = require('browser-sync').create();

const PORT = process.env.PORT || 3000;

require('./webpack');

gulp.task('build-server', () => {
  'use strict';
  return gulp.src('./src/server/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/server'));
});

gulp.task('build-client', ['webpack:dev']);

gulp.task('browsersync', ['build-client', 'nodemon'], () => {
  'use strict';
  gulp.watch('./src/client/**/*.*', ['build-client']);
  gulp.watch('./dist/client/**/*.*', browsersync.reload);

  return browsersync.init({
    proxy: 'localhost:' + PORT,
    browser: 'chrome',
    port: 7000,
    server: false
  });
});

gulp.task('nodemon', ['build-server', 'build-client'], () => {
  'use strict';
  nodemon({
    script: './dist/server/app.js',
    tasks: ['build-server'],
    ignore: ['./dist', './src/client'],
    watch: ['./src'],
    ext: 'js json htm html vue scss css sass'
  });
});

gulp.task('default', ['browsersync']);
gulp.task('build', ['build-client', 'build-server']);
