console.log('执行 module2.js');

const add = function (a, b) { return a + b; }
const subscribe = function (a, b) { return a - b; }

exports.add = add;
exports.subscribe = subscribe;
module.exports.a = 10;

/**
 * 使用module.exports赋值导出模块；exports导出的模块被覆盖
 */
// module.exports = {
//     add,
//     subscribe,
//     a: '10',
// }

/**
 * 直接赋值exports导出的模块为空对象
 */
// exports = {
//     add,
//     subscribe,
// }