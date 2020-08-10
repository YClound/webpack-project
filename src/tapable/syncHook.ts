// import { SyncHook } from 'tapable';
// const hook = new SyncHook();
// hook.tap('logPlugin', () => { console.log('被钩住了')});
// hook.call();

import Car from './car';
const car = new Car();
car.hooks.starHook.tap('startPlugin', () => { console.log('我系一下安全带') });
car.start();
car.hooks.accelerateHook.tap('acceleratePlugin', (speed) => { console.log(`加速到${speed}`) });
car.accelerate(1000);

export default car;