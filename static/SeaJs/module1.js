define(function(require, exports, module) {
    console.log('执行 module1');
    
    var data = 'www.baidu.com';

    function show() {
        console.log('module1 show()', data)
    }

    exports.show = show;
});