console.log('加载了 add 模块')

import data from './data.js';

// var add = function (x = data.a, y = data.b) {
//     return x + y;
// };


var add = function (x, y) {
    return x + y;
};


export { add }