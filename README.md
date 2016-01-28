# es6-webpack-karma-biolerplate
![license](https://img.shields.io/github/license/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)
[![codeclimate analysis](https://img.shields.io/codeclimate/github/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://codeclimate.com/github/frantic1048/es6-webpack-karma-biolerplate)
[![testing coverage](https://img.shields.io/codeclimate/coverage/github/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://travis-ci.org/frantic1048/es6-webpack-karma-biolerplate)
[![travis-ci](https://img.shields.io/travis/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://travis-ci.org/frantic1048/es6-webpack-karma-biolerplate)
[![david-dm](https://img.shields.io/david/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://david-dm.org/frantic1048/es6-webpack-karma-biolerplate)

A minimal ES6 with Karma-Jasmine testing on PhantomJS biolerplate, aims to develop a library as a ES6 module which runs on browsers.

# Prepare

Clone this repo:

```bash
git clone --depth 0 https://github.com/frantic1048/es6-webpack-karma-biolerplate.git
```

Install Gulp 4:

```bash
npm install -g gulpjs/gulp.git#4.0
```

Install dependencies:

```bash
npm install
```

# Composite

Start Karma so it can react to your saved changes and automaticlly run tests.

```
gulp
```

Write your lib source under `lib/`, ensure `lib/index.js` as top level entry.

Write tests under `test/spec/`, for detail instruction see [Jasmine's documentation](http://jasmine.github.io/2.4/introduction.html).

Feel free to use ES6 even ES7 feature whether in lib source or tests, it depends on Babel's suport.

# Appendix

## Run tests once

Sometimes you may want to run tests just once.

```bash
gulp test
```
And if you want `lcov` coverage report for some reason like coverage platform intergration,
use:

```bash
gulp ci
```

It will generate extra lcov report under `coverage/`.This repo use this to report coverage from Travis CI builds to CodeClimate, take a look in `.travis.yml` and `.codeclimate.yml` for reference.

# LICENSE

WTFPL
