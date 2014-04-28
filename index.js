/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-scope', render);
};

module.exports.render = render;

/**
 * Namespace subordinate nodes to this object, and hide if its a falsey value
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

