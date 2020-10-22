console.log('module3 加载');

define(function (require, exports, module) {
  console.log('module3 执行');

  const API_KEY = 'abc123';
  exports.API_KEY = API_KEY;
});
