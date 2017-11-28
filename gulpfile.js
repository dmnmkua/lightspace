const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglifyjs'),
      cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename'),
      del = require('del'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      cache = require('gulp-cache'),
      minifyHtml = require('gulp-minify-html'),
      babel = require('gulp-babel');


gulp.task('sass', function() {
  return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

// gulp.task('scriptsLibs', function() {
//   return gulp.src([
//     'app/libs/jquery/dist/jquery.min.js',
//     'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
//     'app/libs/mask/jquery.maskedinput.js',
//     'app/libs/slick/slick.min.js'
//   ])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js'))
// })

gulp.task('scriptsMain', function() {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    'app/libs/mask/jquery.maskedinput.js',
    'app/libs/slick/slick.min.js',
    'app/js/form.js',
    'app/js/google-map.js',
    'app/js/mask.js',
    'app/js/slider.js',
    'app/js/main.js'
  ])
    .pipe(concat('main.concat.js'))
    // .pipe(babel({
    //   presets: ['env']
    // }))
    // .pipe(uglify())
    // .pipe(rename({suffix: '.babel'}))
    .pipe(gulp.dest('app/js'))
})

// gulp.task('babel', function() {
//   gulp.src('app/js/main.js')
//     .pipe(babel({
//       presets: ['env']
//     }))
//     // .pipe(uglify())
//     .pipe(rename({suffix: '.babel'}))
//     .pipe(gulp.dest('app/js'))
// });

// gulp.task('minify-html', function() {
//   let opts = {comments: true, spare: true};
//
//   gulp.src('app/*.html')
//     .pipe(minifyHtml(opts))
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('dist'))
// })

// gulp.task('css-libs', ['sass'], function() {
//   return gulp.src('app/css/main.css')
//     .pipe(cssnano())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('app/css'))
// })

gulp.task('watch', ['browser-sync', 'sass', 'scriptsMain'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['scriptsMain'], browserSync.reload);
})

gulp.task('clean', function() {
  return del.sync('dist');
})

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['clean', 'img', 'sass', 'scriptsMain'], function() {

  let buildCss = gulp.src([
    'app/css/**/*'
  ])
  .pipe(gulp.dest('dist/css'))

  let buildJs = gulp.src([
    'app/js/main.concat.js'
  ])
  .pipe(gulp.dest('dist/js'))

  let buildHtml = gulp.src([
    'app/index.html'
  ])
  .pipe(gulp.dest('dist'))

  let buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clear', function() {
  return cache.clearAll();
})

gulp.task('default', ['watch'])
