/**
 * 执行 math.js
 * printRandom 8.812968168227261
 * printIntRandom 8
 * 执行 module2.js
 * 4
 */

//加载模块 math.js
var math = require('./math');

//调用模块提供的方法
math.printRandom();
math.printIntRandom();

/**
 * CommonJS 输出的是值的浅拷贝
 */
math.setDefaultRandom(80);
math.setDefaultObj('yanan', 18);
console.log('CommonJS 输出的是值的浅拷贝：', math.random, math.obj);

/**
 * 获取模块导出
 */
var module2 = require('./module2');
// console.log(module2.add(1, 3), module2.subscribe(3, 1))
console.log('获取模块导出：', module2);







































// console.log('------------循环引用-----------');
// var a = require('./a');
// console.log(a);