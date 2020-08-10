/**
 * SyncBailHook就是根据每一步返回的值来决定要不要继续往下走
 * 如果return了一个非undefined的值 那就不会往下走
 * 注意 如果什么都不return 也相当于return了一个undefined。
 */
import Car from './car';
const car = new Car();
car.hooks.brakeHook.tap('brakePlugin1', () => console.log(`刹车1`));
car.hooks.brakeHook.tap('brakePlugin2', () => { console.log(`刹车2`); return 1; });
car.hooks.brakeHook.tap('brakePlugin3', () => console.log(`刹车3`));

car.brake();

export default car;