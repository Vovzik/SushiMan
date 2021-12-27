const path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('libs:build', () => {
		return $.gulp.src(path.path.src.libs)
			.pipe($.plugins.changed(path.path.build.libs))
			.pipe($.gulp.dest(path.path.build.libs))
	})
}
