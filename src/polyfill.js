import 'core-js/modules/es.map';
import 'core-js/modules/es.set';
import 'regenerator-runtime/runtime'

const c = new Map();
console.log(c)

const a = async function() {
  console.log('async await', '111111111111')
}

const b = async function() {
  await a();
}

b();