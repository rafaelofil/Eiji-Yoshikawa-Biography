const gulp = require("gulp");
const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");

function compileSass() {
  return gulp.src("css/sass/*.scss").pipe(sass()).pipe(gulp.dest("./css"));
}

gulp.task("sass", compileSass);

function watch() {
  gulp.watch("css/scss/*.scss", compileSass);
}

gulp.task("default", watch);
