let a = 1;
let b = { a: 1 };

export function setValue() {
  console.log('export 赋值： a=2; b.a=2');
  a = 2;
  b.a = 2;
}

export { a, b };
