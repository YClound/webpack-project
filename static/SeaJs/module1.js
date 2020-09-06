define(function(require, exports, module) {
    console.log('加载了 module1');
    
    var data = require('./data.js');

    function show() {
        console.log('module1 show()', data.msg)
    }

    exports.show = show;
});