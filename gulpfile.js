const {src, dest, series, parallel} = require('gulp');

function defaultTask() {
  return src('sample.html').pipe(dest('dist'));
}

function scripts() {
  return src('js/*js').pipe(dest('dist/js'))
}

function styles() {
  return src('css/*.css').pipe(dest('dist/css'));
}

exports.default = parallel(defaultTask, series(scripts, styles));