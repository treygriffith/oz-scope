
;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("oz-scope", function (exports, module) {
/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-scope', render);
};

module.exports.render = render;

/**
 * Namespace subordinate nodes to this object, and hide if it's a falsey value
 * template: <div oz="person"><p oz-text="name"></p></div>
 * context: { person: {name: 'Tobi'} }
 * output: <div oz="person"><p oz-text="name">Tobi</p></div>
 */

function render (el, ctx, prop, scope, next) {

  var self = this
    , val = this.get(ctx, prop);

  if(!val) {
    this.hide(el);
  } else {
    this.show(el);
  }

  next(el, val, this.scope(scope, prop));
}


});

if (typeof exports == "object") {
  module.exports = require("oz-scope");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("oz-scope"); });
} else {
  this["oz-scope"] = require("oz-scope");
}
})()
