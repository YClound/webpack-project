var module = (function () {
    var _count = 0;
    var fn1 = function () {
        console.log('IIFE fn1', _count)
    }
    var fn2 = function fn2() {
        console.log('IIFE fn2')
    }
    return {
        fn1: fn1,
        fn2: fn2
    }
})()

module.fn1(); // IIFE fn2
console.log(module._count); // undefined