var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {

 var files = [
            '**/*.php',
            'assets/images/**/*.{png,jpg,gif}',
          ];

 browserSync.init(files, {
    // Proxy address
    proxy: URL,

   // Port #
    // port: PORT
  });
});

 
// gulp.task('scripts', function() {
//     gulp.src('main.js')
//         .pipe(browsersync({
//           insertGlobals : true,
//           debug : !gulp.env.production
//         }))
//         .pipe(gulp.dest('./build/js'))
// });