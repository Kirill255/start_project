var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync");

gulp.task("sass", function() {
	return gulp.src("sass/style.scss")
	.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
	.pipe(autoprefixer({
		browsers: ["last 4 versions"],
		grid: true
	}))
	.pipe(gulp.dest("css"))
	.pipe(browserSync.stream());
});

gulp.task("server", function() {
	browserSync({
		server: {
			baseDir: "."
		},
		notify: false
	});
});

gulp.task("default", ["server"], function() {
	gulp.watch("./index.html", browserSync.reload);
	gulp.watch("sass/style.scss", ["sass"]);
	gulp.watch("js/script.js", browserSync.reload);
});