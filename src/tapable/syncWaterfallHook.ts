/**
 * SyncWaterfallHook的定义：
 * 它的每一步都依赖上一步的执行结果，也就是上一步return的值就是下一步的参数。
 */

import Car from './car';
const car = new Car();

car.hooks.newAccelerateHook.tap('acceleratePlugin1', (speed) => { console.log(`加速到${speed}`); return speed + 100; })
car.hooks.newAccelerateHook.tap('acceleratePlugin2', (speed) => { console.log(`加速到${speed}`); return speed + 100; })
car.hooks.newAccelerateHook.tap('acceleratePlugin3', (speed) => { console.log(`加速到${speed}`);})

car.newAccelerate(100);

export default car;