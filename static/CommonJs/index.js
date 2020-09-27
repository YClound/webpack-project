/**
 * 执行 math.js
 * printRandom 8.812968168227261
 * printIntRandom 8
 * 执行 module2.js
 * 4
 */

 console.log('执行index.js')

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
















/**
 * 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
 */
var math2 = require('./math');
console.log(math2)






































// console.log('------------循环引用-----------');
// var a = require('./a');
// console.log(a);