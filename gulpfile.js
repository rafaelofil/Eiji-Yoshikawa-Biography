const gulp = require("gulp");
const sass = require("gulp-sass");

function compileSass() {
  return gulp.src("css/sass/*.scss").pipe(sass()).pipe(gulp.dest("./css"));
}

gulp.task("default", compileSass);
