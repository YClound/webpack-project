console.log('加载了 add 模块')

import data from './data.js';

// var add = function (x = data.a, y = data.b) {
//     return x + y;
// };
var a = 10;
var b = 10;

var add = function (x = a, y = b) {
    return x + y;
};

var setDefultAdd = (x, y) => {
    a = x;
    b = y;
}


export { add, setDefultAdd, a, b }