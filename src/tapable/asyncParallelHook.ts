/**
 * AsyncParallelHook
 * 会在1s的时候打印‘计算路线1’。2s的时候打印‘计算路线2’。紧接着打印‘最终的回调’
 * 当所有的异步任务执行结束后，再最终的回调中执行接下来的代码。
 * 可以确保所有的插件的代码都执行完毕后，再执行某些逻辑。
 * 
 * 除了使用tapAsync/callAsync的方式使用AsyncParallelHook。
 * 还可以使用tapPromise/promise的方式。
 */

/**
 * AsyncSeriesHook-串行。就是插件一个一个的按顺序执行
 * 1s过后，打印计算路线1，再过2s（而不是到了第2s，而是到了第3s），打印计算路线2，再立马打印最终的回调。
 */

import AsyncCar from './asyncCar';

const car = new AsyncCar();

car.hooks.calculateRoutesHook.tapAsync('calculateRoutesPlugin1', (callback) => {
  setTimeout(() => {
    console.log('计算路线1：', +new Date());
    callback && callback();
  }, 1000)
})

car.hooks.calculateRoutesHook.tapAsync('calculateRoutesPlugin2', (callback) => {
  setTimeout(() => {
    console.log('计算路线2：', +new Date());
    callback && callback();
  }, 2000)
})

car.calculateRoutes(() => {
  console.log('计算线路完成')
})


car.hooks.calculateRoutesPromiseHook.tapPromise('calculateRoutesPlugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise 计算路线1：', +new Date());
      resolve();
    }, 1000)
  })
})

car.hooks.calculateRoutesPromiseHook.tapPromise('calculateRoutesPlugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise 计算路线2：', +new Date());
      resolve();
    }, 2000)
  })
})

car.calculateRoutesPromise().then(() => {
  console.log('promise 计算线路完成')
})

export default car;