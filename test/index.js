// require all `test/spec/**/Spec.js`
const testsContext = require.context('./spec/', true, /Spec\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/script/**/index.js`
const componentsContext = require.context('../src/script/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
