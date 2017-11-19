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

gulp.task('scripts', function() {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
})

gulp.task('babel', function() {
  gulp.src('app/js/main.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-html', function() {
  let opts = {comments: true, spare: true};

  gulp.src('app/*.html')
    .pipe(minifyHtml(opts))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('css-libs', ['sass'], function() {
  return gulp.src('app/css/main.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
})

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
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

gulp.task('build', ['clean', 'img', 'minify-html', 'sass', 'babel', 'scripts'], function() {

  let buildCss = gulp.src([
    'app/css/main.min.css'
  ])
  .pipe(gulp.dest('dist/css'))

  let buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clear', function() {
  return cache.clearAll();
})

gulp.task('default', ['watch'])
