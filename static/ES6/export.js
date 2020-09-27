const exportVar = 11111111;
const exportObj = { a: 1, b: 3 + 2 };

// console.log(exportObj, exportVar)

export { exportVar, exportObj };


let a = 1;
let b = { a: 1 };

export function setA() {
  a = 2;
  b.a = 2
  console.log('a:', a, b)
}

// export default 是无法 a 的动态绑定
export default { a, b };

// 实现default动态绑定
// export { a as default }