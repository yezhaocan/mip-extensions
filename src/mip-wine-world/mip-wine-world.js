
/**
* 红酒世界改造mip,实现自定义功能
* @date 2018.2.2
* @version 1.0.0
*/
define(function (require) {
    var $ = require('jquery');//引用Jquery插件
    var customElem = require('customElement').create();
    customElem.prototype.build = function () {
        $(".extendNav").click(function () {
            $(".navfixed").slideToggle("fast");
            $(".mask2").toggle();
        });
        $(".mask2").click(function () {
            $(".navfixed").slideUp("fast");
            $(".mask2").toggle();
        });
    };
    return customElem;
});
