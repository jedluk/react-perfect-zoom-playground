const path = require('path');
const { removeModuleScopePlugin } = require('customize-cra');
const { override, babelInclude } = require('customize-cra');

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      removeModuleScopePlugin(),
      babelInclude([path.resolve('src'), path.resolve('../react-perfect-zoom/src')])
    )(config, env)
  );
};
