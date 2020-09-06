/**
 * 输出
 * 加载了 module1
 * module1 show() www.baidu.com
 
 * 加载了 module4
 * 加载了 module2
 * module4 show() I will back
 
 * 加载了 module3
 * 异步引入依赖模块3  abc123
 */

/**
 * if (typeof define === "function" && define.cmd) {
    // 有 Sea.js 等 CMD 模块加载器存在
  }
*/

seajs.config({
    alias: {
        'module1': './module1.js',
        'module2': './module2.js',
        'module3': './module2.js',
        'module4': './module2.js',
    }
})

define(function (require, exports, module) {
    // 该函数不会加载模块，只返回解析后的绝对路径
    console.log(require.resolve('module2'), exports, module)

    // var m1 = require('./module1');
    var m1 = require('module1');
    m1.show();

    var m4 = require('./module4');
    m4.show();
})