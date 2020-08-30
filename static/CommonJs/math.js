console.log('执行 math.js');

var random = Math.random() * 10;
function printRandom() {
    console.log('printRandom', random)
}

function printIntRandom() {
    console.log('printIntRandom', Math.floor(random))
}

//模块输出
module.exports = {
    printRandom: printRandom,
    printIntRandom: printIntRandom
}