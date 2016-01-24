// emulate a full ES6 environment
// just import ONCE in this entry file is ok.
// http://babeljs.io/docs/usage/polyfill/
import 'babel-polyfill';

// normal code
import ala from './ala.js';
import boya from './boya.js';

export {ala, boya};
