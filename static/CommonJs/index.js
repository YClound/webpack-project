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

var module2 = require('./module2');
console.log(module2.add(1, 3))