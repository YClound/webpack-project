console.log('执行 math.js');

var random = Math.random() * 10;

function printRandom() {
    console.log('printRandom', random)
}

function printIntRandom() {
    console.log('printIntRandom', Math.floor(random))
}


function setDefaultRandom(value) {
    random = 100 || value;
}

function getDefaultRandom() {
    return random;
}

var obj = {
    name: 'GU',
    age: 18
}

function setDefaultObj(name, age = 18) {
    obj.name = name;
    obj.age = age;
}

function getDefaultObj() {
    return obj;
}

console.log('this:', this)

//模块输出
module.exports = {
    printRandom,
    printIntRandom,
    setDefaultRandom,
    getDefaultRandom,
    setDefaultObj,
    getDefaultObj,
    obj,
    random,
}