import gulp       from 'gulp';
import newer      from 'gulp-newer';
import uglify     from 'gulp-uglify';
import babel      from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import connect    from 'gulp-connect';
import karma      from 'gulp-karma';
import webpack    from 'webpack-stream';
import named      from 'vinyl-named';

// --------------- CONFIG

const webpackConf = {
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components|src)/,
        loader: 'json',
      },
    ],
  },
};

const webpackDevConf = {
  ...webpackConf,
  watch: true,
  devtool: '#inline-source-map',
};

const webpackProductConf = {
  ...webpackConf,
  plugins: [
    new webpack.webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }),
  ],
};

const app = {
  html: {},
  bundle: {},
  test: {},
};

app.bundle.entry = ['src/script/index.js'];
app.bundle.dest = ['build/script/index.js'];
app.bundle.destPath = 'build/script';

app.html.src = ['src/*.html'];
app.html.dest = ['build/*.html'];
app.html.destPath = 'build/';

app.test.src = 'test/spec/*Spec.js';

// --------------- TASK

gulp.task('serve', (callback) => {
  connect.server({
    port: 23333,
    root: app.html.destPath,
    livereload: true,
  });
  callback();
});

gulp.task('reload', (callback) => {
  connect.reload();
  callback();
});

gulp.task('html', () => {
  return gulp.src(app.html.src)
    .pipe(gulp.dest(app.html.destPath));
});

gulp.task('html', () => {
  return gulp.src(app.html.src)
    .pipe(gulp.dest(app.html.destPath));
});

gulp.task('webpack-dev', ()=>{
  return gulp.src(app.bundle.entry)
    .pipe(named())
    .pipe(webpack(webpackDevConf))
    .pipe(gulp.dest(app.bundle.destPath));
});

gulp.task('webpack-product', ()=>{
  return gulp.src(app.bundle.entry)
    .pipe(named())
    .pipe(webpack(webpackProductConf))
    .pipe(gulp.dest(app.bundle.destPath));
});


gulp.task('dev', (callback) => {
  gulp.watch(app.html.src, gulp.series('html', 'reload', 'test'));
  gulp.watch(app.bundle.dest, gulp.series('reload', 'test'));
  gulp.watch(app.test.src, gulp.series('test'));
  gulp.series(
    'webpack-dev',
    'serve',
  )();
  callback();
});

gulp.task('build', (callback) => {
  gulp.parallel(
    'webpack-product',
    'html',
  )();
  callback();
});

gulp.task('test', function() {
  return gulp.src(['test/*Spec.js'])
    .pipe(karma({ configFile: 'karma.conf.js' }));
});

gulp.task('default', gulp.series('dev'), (callback) => {
  callback();
});
