module.exports = function once(cb) {
  var called = false;
  var val;

  return function() {
    if (!called) {
      called = true;
      val = cb.apply(this, arguments);
    }

    return val;
  };
};
