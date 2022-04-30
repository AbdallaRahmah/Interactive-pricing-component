const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const prefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");

function serve() {
  return browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
}

exports.serve = serve;

// html task
function html() {
  return src("./src/*.html").pipe(dest("./dist/"));
}

exports.html = html;

// Sass Task
function scss() {
  return src("src/styles/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(prefixer({ cascade: false }))
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist/styles/", { sourcemaps: "." }));
}

exports.scss = scss;

// js task
function js() {
  return src("./src/scripts/*.js").pipe(dest("./dist/scripts/"));
}

exports.js = js;

// watch Task
function watchTask() {
  watch("./src/*.html").on("change", series(html, browserSync.reload));
  watch("./src/styles/**/*.scss").on(
    "change",
    series(scss, browserSync.reload)
  );
  watch("./src/scripts/*.js").on("change", series(js, browserSync.reload));
}

exports.watchTask = watchTask;

// default
exports.default = series(html, scss, js, parallel(serve, watchTask));
