console.log('data 加载');

define(function (require, exports, module) {
  console.log('data 执行')
  exports.data = {
    a: 10,
    b: 20,
    msg: 'www.baidu.com',
  }
});
