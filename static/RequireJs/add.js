
define([
    'data',
], function (dataModule) {
    console.log('加载了 add 模块');

    // const add = (a = dataModule.a, b = dataModule.b) => { return a + b; }

    // 未使用的模块 引用也会被加载
    const add = (a, b) => { return a + b; }

    return {
        add
    }
});