// const exportVar = 11111111;
// const exportObj = { a: 1, b: 3 + 2 };

// export { exportVar, exportObj };

// let a = 1
// export { a }


// 循环引用
import { b } from './export1.js';
console.log('b:', b);


// export let a = 2;
export function a () {
  return 2;
}
