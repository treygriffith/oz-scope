
var Oz = require('oz');
var ozText = require('oz-text');
var ozVal = require('oz-val');
var ozScope = require('oz-scope');
var assert = require('assert');
var text = require('text');
var children = require('children');
var trigger = require('trigger-event');

Oz
  .use(ozText)
  .use(ozVal)
  .use(ozScope);

describe('Rendering', function(){

  it('should set text values in the context of objects', function(){
    var el = children(Oz.render('<div oz-scope="person"><p oz-text="name"></p></div>', { person: { name: 'Tobi' }, name: 'John' }))[0];
    assert('Tobi' == text(children(el)[0]));
  });

});

describe("Updating", function() {


  it('should update text of a nested value', function(){

    var template = Oz('<div oz-scope="person"><p oz-text="name"></p></div>');
    var el = children(template.render({ person: { name: 'Tobi' } }))[0];

    assert('Tobi' == text(children(el)[0]));

    template.update({person: { name: 'Brian' }});

    assert('Brian' == text(children(el)[0]));
  });

  it('should emit scoped form events', function (next) {
    var template = Oz('<div oz-scope="person"><input oz-val="name"></div>');

    var el = children(children(template.render())[0])[0];

    template.on('change:name', function () {
      assert(false);
    });

    template.on('change:person.name', function () {
      assert(true);
      next();
    });

    el.value = 'Tobi';

    trigger(el, 'change');
  });

});
