"use strict";
var _slice = Array.prototype.slice;

var Test = function(Foo) {
  var Test = function Test() {
    woops.super.test();
    Foo.call(this);
    Foo.prototype.test.call(this);
    foob(Foo);
    Foo.call.apply(Foo, [this].concat(_slice.call(arguments)));
    Foo.call.apply(Foo, [this, "test"].concat(_slice.call(arguments)));
    Foo.prototype.test.call.apply(Foo.prototype, [this].concat(_slice.call(arguments)));
    Foo.prototype.test.call.apply(Foo.prototype, [this, "test"].concat(_slice.call(arguments)));
  };

  Test.prototype = Object.create(Foo.prototype, {
    constructor: {
      value: Test,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  Test.__proto__ = Foo;

  Object.defineProperties(Test.prototype, {
    test: {
      writable: true,

      value: function() {
        Foo.prototype.test.call(this);
        Foo.prototype.test.call.apply(Foo.prototype.test, [this].concat(_slice.call(arguments)));
        Foo.prototype.test.call.apply(Foo.prototype.test, [this, "test"].concat(_slice.call(arguments)));
      }
    }
  });

  Object.defineProperties(Test, {
    foo: {
      writable: true,

      value: function() {
        Foo.foo.call(this);
        Foo.foo.call.apply(Foo.foo, [this].concat(_slice.call(arguments)));
        Foo.foo.call.apply(Foo.foo, [this, "test"].concat(_slice.call(arguments)));
      }
    }
  });

  return Test;
}(Foo);