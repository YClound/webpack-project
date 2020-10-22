console.log('执行 math.js');

var random = Math.random() * 10;

function printRandom() {
  console.log('printRandom', random)
}

function printIntRandom() {
  console.log('printIntRandom', Math.floor(random))
}


// common.js导出的是值的浅拷贝
/**
 * setDefaultRandom()
 * 导出的random不变
 */
function setDefaultRandom(value) {
  random = 100 || value;
}

function getDefaultRandom() {
  return random;
}

/**
 * setDefaultObj();
 * 导出的obj改变
 */
var obj = {
  name: 'GU',
  age: 18
}

function setDefaultObj(name, age = 18) {
  console.log('set obj:', name, age)
  obj.name = name;
  obj.age = age;
  // obj = { name, age }
}

function getDefaultObj() {
  return obj;
}

// console.log('this:', this);

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
