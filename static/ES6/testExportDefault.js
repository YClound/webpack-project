// export default 是无法 a 的动态绑定
let a = 1;
let b = { a: 1 };

export function setDefaultValue () {
  console.log('export default赋值： a=2; b.a=2');
  a = 2;
  b.a = 2;
}

export default {
  a,
  b,
};

// 实现default动态绑定
// export { a as default }
