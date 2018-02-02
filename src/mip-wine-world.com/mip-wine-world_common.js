
/**
* 红酒世界改造mip,实现自定义功能
* @date 2018.2.2
* @version 1.0.0
*/
define(function (require) {

    var $ = require('zepto');
    var customElem = require('customElement').create();

    function open() {
        $('.icon_open').on('click', function () {
            $('.nav .hide').removeClass('hide');
            $('.icon_open').hide();
            $('.icon_close').show();
            $('.icon_close').css('display', 'block');

            var top = $('.nav').height() + $('.w98').height() + 1;
            $('.container').css('padding-top', top + 'px');
        });
    }

    function close() {
        $('.icon_close').on('click', function () {
            $('.open').addClass('hide');
            $('.icon_open').show();
            $('.icon_close').hide();

            var top = $('.nav').height() + $('.w98').height() + 1;
            $('.container').css('padding-top', top + 'px');
        });
    }

    function init() {
        open();
        close();
    }

    customElem.prototype.build = init;

    return customElem;
});
