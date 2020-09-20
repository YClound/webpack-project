console.log('module2 加载');

define(function(require, exports, module) {
    console.log('module2 执行');
    
    module.exports = {
        msg: 'I will back'
    }
});