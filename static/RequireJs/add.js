
console.log('add 加载');

/**
 * define(id?, dependencies, factory)
 * id: 定义中模块的名字 默认文件名
 * dependencies：模块所依赖模块的数组
 * factory：模块初始化要执行的函数或对象
 */

define([
  'data',
  'exports'
], function (dataModule, exports) {
  console.log('add 执行', dataModule, +new Date());

  // const add = (a = dataModule.a, b = dataModule.b) => { return a + b; }

  // 未使用的模块 引用也会被加载
  const add = (a, b) => { return a + b; }

  exports.add = add

  // return {
  //     add
  // }
});
