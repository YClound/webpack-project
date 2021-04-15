import 'core-js/modules/es.map';
// import 'core-js/modules/es.set';

const c = new Map();
console.log(c)

// async异步函数
import 'regenerator-runtime/runtime';
const a = async function() {
  console.log('async await', '111111111111')
}

const b = async function() {
  await a();
}

b();