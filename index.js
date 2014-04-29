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

function render (el, val, scope) {

  if(!val) {
    this.hide(el);
  } else {
    this.show(el);
  }

  return scope;
}

