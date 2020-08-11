/**
 * AsyncParallelBailHook
 * 打印结果是：等1s打印'计算路线1' ，马上打印‘最终的回调 1’，再到第2s，打印'计算路线2'
 * 如果给callback传参数，就会立马调用最终的回调函数。
 * 但并不会阻止其他插件继续执行自己的异步，只不过最终的回调拿不到这些比较慢的插件的回调结果了。
 */

/**
  * AsyncSeriesBailHook
  * 串行执行，并且只要一个插件有返回值，立马调用最终的回调，并且不会继续执行后续的插件。
  * 打印结果是：1s过后，打印计算路线1，立马打印最终的回调，不会再执行计算路线2了。
  */

import AsyncCar from './asyncCar';

const car = new AsyncCar();

car.hooks.diffHook.tapAsync('diffPlugin1', (callback) => {
  setTimeout(() => {
    console.log('diff 计算路线1：', +new Date());
    callback && callback(1);
  }, 1000)
})

car.hooks.diffHook.tapAsync('diffPlugin2', (callback) => {
  setTimeout(() => {
    console.log('diff 计算路线2：', +new Date());
    callback && callback(2);
  }, 2000)
})

car.diff((result: number) => {
  console.log('diff 计算线路完成:', result)
})

export default car;