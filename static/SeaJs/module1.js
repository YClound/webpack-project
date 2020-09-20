console.log('module1 加载')

define(function(require, exports, module) {
    console.log('module1 执行 ');
    
    var dataModule = require('./data.js');
    
    function show() {
        console.log('module1 show()', dataModule.data.msg)
    }

    exports.show = show;
});