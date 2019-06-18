const myBind = value => {};

Function.prototype.my_bind = function() {
  const self = this;
  const context = Array.prototype.shift.call(arguments);
  const args = Array.prototype.slice.call(arguments);
  return function() {
    self.apply(
      context,
      Array.prototype.concat.call(args, Array.prototype.slice.call(arguments))
    );
  };
};

function debounce(idle, action) {
  var last;
  return function() {
    var ctx = this;
    var arg = arguments;
    last = setTimeout(() => {
      action.apply(ctx, args);
    }, idle);
  };
}

function throttle(delay, action) {
  var last = 0;
  return function() {
    var curr = +new Date();
    if (curr - last > delay) {
      action.apply(this, arguments);
      last = curr;
    }
  };
}
