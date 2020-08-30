/**
 * 输出
 * 执行 index.js
 * 执行 dataService.js
 * 执行 alerter.js
 * WWW.BAIDU.COM, Tom
 */

(function () {
    console.log('执行 index.js');

    require.config({
        baseUrl: './', //基本路径 出发点在根目录下
        paths: {
            //映射: 模块标识名: 路径
            alerter: './alerter', //此处不能写成alerter.js,会报错
            dataService: './dataService'
        }
    });
    require(['alerter'], function (alerter) {
        alerter.showMsg()
    });
})();