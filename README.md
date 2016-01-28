# es6-webpack-karma-biolerplate
[![codeclimate analysis](https://img.shields.io/codeclimate/github/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://codeclimate.com/github/frantic1048/es6-webpack-karma-biolerplate)
[![travis-ci](https://img.shields.io/travis/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://travis-ci.org/frantic1048/es6-webpack-karma-biolerplate)
[![david-dm](https://img.shields.io/david/frantic1048/es6-webpack-karma-biolerplate.svg?style=flat-square)](https://david-dm.org/frantic1048/es6-webpack-karma-biolerplate)
A minimal ES6 with Karma-Jasmine testing on browser biolerplate, aims to develop a library which runs on browsers.

# Prepare

Clone this repo:

```bash
git clone --depth 0 https://github.com/frantic1048/es6-webpack-karma-biolerplate.git
```

Install dependencies:

```bash
npm install
```

Write your code under `/src/script`, ensure `/src/script/index.js` as your entry script.

Write your tests in `/test/spect/mainSpec.js`.

# Usage

## Test

```bash
gulp test
```

## Develop & Automatic Tesing

```bash
gulp
```

## Build product

```bash
gulp build
```
