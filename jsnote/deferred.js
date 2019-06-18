function Callbacks(status) {
  function CB() {
    this.once = !!status;
    this.callback = [];
  }
  CB.prototype.add = function(fn) {
    this.callback.push(fn);
    return this;
  };
  CB.prototype.fire = function() {
    const cbs = this.callback;
    if (this.once && cbs.length) {
      const cb = this.callback.shift();
      cb.apply(cb, arguments);
    } else {
      for (let i = 0, l = cbs.length; i < l; i++) {
        cbs[i]();
      }
    }
    return this;
  };
  return new CB();
}
function Deferred() {
  const successCallbacks = new Callbacks(true);
  const failCallbacks = new Callbacks(true);
  const deferred = function() {
    this.state = "pending";
  };
  deferred.prototype.then = function(resolve, reject) {
    successCallbacks.add(resolve);
    failCallbacks.add(reject);
    return this;
  };
  deferred.prototype.reject = function(errMsg) {
    this.state = "rejected";
    failCallbacks.fire(errMsg);
    return this;
  };
  deferred.prototype.resolve = function(sucMsg) {
    this.state = "resolveed";
    successCallbacks.fire(...arguments);
    return this;
  };
  return new deferred();
}
Deferred.prototype.all = function() {
  const length = arguments.length;
  let resolved = 0;
  const dfd = new Deferred();
  const cb = function() {
    resolved += 1;
    if (resolved === length) {
      dfd.resolve();
    }
  };
  for (let i = 0; i < length; i++) {
    arguments[i].done(cb);
  }
  return dfd;
};
