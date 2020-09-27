export { exportVar as exportVar1, exportObj as exportObj1 } from './export.js';

// export import 写成一行不能直接访问 导入的模块
// console.log('export1: ', exportObj1, exportVar1); // export1.js:3 Uncaught ReferenceError: exportObj1 is not defined