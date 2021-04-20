import css from './style.css';

const a: string = '111111';
console.log(a, css);

async function fun() {
  const func = await (() => import('../pages/testTsCodeSplit/code-split'))()
  return func;
}

console.log(fun())

import(/* webpackChunkName: 'ts_code_split' */ '../pages/testTsCodeSplit/code-split').then((item:any) => {
  console.log(item)
})
