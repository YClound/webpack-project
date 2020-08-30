/**
 * 输出
 * 执行 module1
 * 执行module4
 * 执行module2
 * module1 show() www.baidu.com
 * module4 show() I will back
 * 异步引入依赖模块3  abc123
 */

define(function (require) {
    var m1 = require('./module1');
    var m4 = require('./module4');
    m1.show();
    m4.show();
})