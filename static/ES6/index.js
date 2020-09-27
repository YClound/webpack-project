/**
 * 加载了 add 模块
 * 加载了 multiply 模块
 * 加载了 square 模块
 * 2
 * 9
 */
console.log('执行了 index.js');

import { add, setDefultAdd, a, b } from './add.js';
import { square } from './square.js';
console.log(add(1, 1))

setDefultAdd(20, 20)

console.log(add(), a, b)

console.log(square(3));





















// // 因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
// /**
//  * test export import
//  */
// exportObj.a = 3; // 变量提升

// import data, { exportVar, exportObj, setA } from './export.js';
// // import './export.js'; // 执行export.js
// /**
//  * import 命令输入的变量是只读 输入的是对象 可以改变对象的属性值
//  * import 引入具有提升效果，会提升到整个模块顶部
//  * import 是静态的不能使用表达式和变量引入
//  * import 会执行所加载的模块
//  * import export 命令只能在模块最顶层
//  */
// // exportVar = 2222222 // Assignment to constant variable.
// exportObj.a = 2;
// setA();
// console.log('测试import: ', exportVar, exportObj, data)


// import { exportObj1, exportVar1 } from './export1.js';
// console.log('import export 组合: ', exportVar1, exportObj1)


// /**
//  * import() 异步加载 动态加载模块 返回Promise对象
//  * 使用场景
//  * 1. 按需加载
//  * 2. 条件加载
//  * 3. 动态的模块路径
//  */
// import('./export.js').then((res) => {
//   console.log(res);
// })