/**
 * AsyncSeriesWaterfallHook-串行执行，并且前一个插件的返回值，会作为后一个插件的参数。
 */
import AsyncCar from './asyncCar';

const car = new AsyncCar();
car.hooks.waterfallHook.tapPromise('waterfallPlugin1', (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('waterfall 计算路线1', result);
      resolve(1);
    }, 1000);
  });
});

car.hooks.waterfallHook.tapPromise('waterfallPlugin2', (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('waterfall 计算路线2', result);
      resolve(2);
    }, 2000);
  });
});

car.waterfall(0).then((result) => { console.log('waterfall 最终的回调:', result); });

export default car;