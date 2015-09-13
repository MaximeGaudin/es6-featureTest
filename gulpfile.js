var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require("gulp-rename");

gulp.task('es6', function () {
		return gulp.src('./src/*.js')
			.pipe(babel())
			.pipe(rename({ extname: '.es5.js' }))
			.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['es6']);
