// require all `test/spec/*.js`
const testsContext = require.context('./spec/', true, /\.js$/);

testsContext.keys().forEach(testsContext);

// require all `lib/**/index.js`
const libContext = require.context('../lib/', true, /index\.js$/);

libContext.keys().forEach(libContext);
