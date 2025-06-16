const path = require('path');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const { resourcePath } = this;
  const root = path.relative(process.cwd(), path.dirname(resourcePath));
  const tpl = JSON.stringify(source);
  const rootEscaped = JSON.stringify(root);
  return `const { Liquid } = require('liquidjs');
const engine = new Liquid({ root: ${rootEscaped}, extname: '.liquid', cache: false, jekyllInclude: true });
module.exports = function(context = {}) { return engine.parseAndRenderSync(${tpl}, context); };`;
};
