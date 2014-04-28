oz-scope
========

Scoping tag for [Oz](http://github.com/treygriffith/oz).


Installation
------------

Using component:

```
$ component install treygriffith/oz-scope
```

Using a script tag (UMD compatible)

```
<script src="./oz-scope.min.js"></script>
```

Usage
-----

Causes all child DOM nodes to be rendered in the context of the indicated property. If the property has a false-y value, the DOM node is hidden.

Notation:

```html
<div oz-scope="person"></div>
```

Example:

```javascript
var context = {
  person: {
    name: 'Tobi'
  }
};
```

```html
<div oz="person">
  <span oz-text="name">Tobi</span>
</div>
```

License
-------
MIT
