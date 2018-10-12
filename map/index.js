module.exports = function map(arr, cb, context) {
  var newArr = [];
  var ctx = context || arr;
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb.call(ctx, arr[i], i, arr));
  }
  return newArr;
};
