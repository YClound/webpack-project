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

(function () {
    let data = 'www.baidu.com'
    //操作数据的函数
    function foo() {
        //用于暴露有函数
        console.log(`foo() ${data}`)
    }
    function bar() {
        //用于暴露有函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
    }
    function otherFun() {
        //内部私有的函数
        console.log('otherFun()')
    }
    //暴露行为
    window.myModule = { foo, bar }
})(window)