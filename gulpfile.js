const { src, dest, watch, task, series } = require("gulp")
const less = require("gulp-less")
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');

const compileLess = () => {
  return src(['src/less/index.less'])
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write('./', {}))
  .pipe(dest('dist/'))
}

const buildLess = () => {
  return src(['src/less/index.less'])
  .pipe(less())
  .pipe(cleanCss())
  .pipe(dest('dist/'))
}

const watchLess = () => {
  watch(['src/less/**/*.less'], compileLess);
}

task('watch-less', series(compileLess, watchLess));
task('build-less', series(buildLess));