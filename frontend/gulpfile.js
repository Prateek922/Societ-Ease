const gulp = require('gulp');
const appendPrepend = require('gulp-append-prepend');

// Define a task named 'licenses'
gulp.task('licenses', function (done) {
  // Use gulp-append-prepend to run the npm scripts in order
  gulp.src('package.json')
    .pipe(appendPrepend.prepend([
      'npm run install:clean &&',
      'npm run compile-sass &&',
      'npm run minify-sass &&',
      'npm run map-sass &&'
    ].join(' ')))
    .pipe(gulp.dest('.')) // Save the modified package.json
    .on('end', function () {
      console.log('All scripts completed successfully!');
      done();
    });
});
