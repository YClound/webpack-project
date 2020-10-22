console.log('multiply 加载')

define(function () {
  console.log('multiply 执行')

  var multiply = function (x, y) {
    return x * y;
  };
  return { multiply }
});
