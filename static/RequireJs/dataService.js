/**
 * define(id?, dependencies?, factory);
 * id ：可选参数，它指的是模块的名字。
 * dependencies：可选参数，定义中模块所依赖模块的数组。
 * factory：模块初始化要执行的函数或对象
 * 
 * 需要注意的是，dependencies有多少个元素，factory就有多少个传参，位置一一对应。
 */

// 定义没有依赖的模块
define(function () {
    console.log('执行 dataService.js');
    
    let msg = 'www.baidu.com';

    function getMsg() {
        return msg.toUpperCase()
    }
    
    return { getMsg } // 暴露模块
});