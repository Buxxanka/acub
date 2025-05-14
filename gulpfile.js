'use strict';

const gulp       = require('gulp');
const sass       = require('gulp-sass')(require('sass'));
const changed    = require('gulp-changed').default || require('gulp-changed');
const cleanCSS   = require('gulp-clean-css');
const rtlcss     = require('gulp-rtlcss');
const rename     = require('gulp-rename');
const uglify     = require('gulp-uglify');
const pump       = require('pump');
const htmlhint   = require('gulp-htmlhint');

/**
 * Компиляция SASS в CSS.
 */
function sassTask() {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(changed('static/css/'))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('static/css/'));
}

/**
 * Минификация CSS.
 * Первая часть – минификация основного стиля,
 * вторая – минимизация RTL-версии.
 */
function minifyCssTask() {
  // Минифицируем основной файл layout.css
  gulp.src(['static/css/layout.css', 'static/css/style.css','!static/css/*.min.css'])
    .pipe(cleanCSS({ debug: true }, details => {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('static/css/'));

  // Минифицируем RTL-версию, возвращаем поток для корректного завершения задачи
  return gulp.src(['static/css/layout-rtl.css', '!static/css/layout-rtl.min.css'])
    .pipe(cleanCSS({ debug: true }, details => {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('static/css/'));
}

/**
 * Конвертация LTR CSS в RTL.
 */
function rtlCssTask() {
  return gulp.src([
      'static/css/layout.css', 
      '!static/css/layout.min.css', 
      '!static/css/layout-rtl.css', 
      '!static/css/layout-rtl.min.css'
    ])
    .pipe(changed('static/css/'))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('static/css/'));
}

/**
 * Минификация JavaScript.
 */
function uglifyTask(cb) {
  pump([
    gulp.src(['static/js/**/*.js', '!static/js/**/*.min.js']),
    uglify(),
    rename({ suffix: '.min' }),
    gulp.dest('static/js/')
  ], cb);
}

/**
 * Валидация HTML с помощью htmlhint.
 */
function htmlHintTask() {
  return gulp.src('shop/templates/**/*.html')
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter({ suppress: true }));
}

/**
 * Наблюдение за изменениями файлов.
 */
function watchTask() {
  gulp.watch('assets/sass/**/*.scss', sassTask);
  gulp.watch('static/css/layout.css', gulp.series(minifyCssTask, rtlCssTask));
  gulp.watch('static/js/**/*.js', uglifyTask);
  gulp.watch('templates/**/*.html', htmlHintTask);
}

// Экспортируем задачи для CLI
exports.sass = sassTask;
exports.minifyCss = minifyCssTask;
exports.rtlcss = rtlCssTask;
exports.uglify = uglifyTask;
exports.htmlhint = htmlHintTask;
exports.watch = watchTask;

// Задача по умолчанию, которая запускает все задачи параллельно
exports.default = gulp.parallel(
  sassTask,
  minifyCssTask,
  rtlCssTask,
  uglifyTask,
  htmlHintTask,
  watchTask
);
