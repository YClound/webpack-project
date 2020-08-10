import Car from './car';
const car = new Car();
let index = 0;

car.hooks.newStartHook.tap('startPlugin1', () => {
    console.log(`启动`);
    if (index < 5) {
        index++;
        return 1;
    }
})

car.hooks.newStartHook.tap('startPlugin2', () => {
    console.log(`启动成功`);
})

car.newStart();
export default car;