const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

function compileSass() {
  return gulp
    .src("css/sass/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 version"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("./css"));
}

gulp.task("default", compileSass);
