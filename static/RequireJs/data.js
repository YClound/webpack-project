/**
 * define(id?, dependencies?, factory);
 * id ：可选参数，它指的是模块的名字。
 * dependencies：可选参数，定义中模块所依赖模块的数组。
 * factory：模块初始化要执行的函数或对象
 *
 * 需要注意的是，dependencies有多少个元素，factory就有多少个传参，位置一一对应。
 */

// 定义无依赖的模块
console.log('data 加载', +new Date());

var data = {
  a: 10,
  b: 20,
}

define(data);

// console.log(data);
