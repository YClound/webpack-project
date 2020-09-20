
console.log('add 加载');

define([
    'data',
], function (dataModule) {
    console.log('add 执行', dataModule,  +new Date());

    // const add = (a = dataModule.a, b = dataModule.b) => { return a + b; }

    // 未使用的模块 引用也会被加载
    const add = (a, b) => { return a + b; }

    return {
        add
    }
});