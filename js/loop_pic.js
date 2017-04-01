/**
 * Created by LYC on 2017/2/6.
 */
$.fn.extend({
    fadePlay: function () {
        var f = 0;
        var j = null;
        var d = $(this);
        d.find('div>ul li').mouseenter(function () {
            if ($(this).class == 'current')return;
            f = $(this).index();
            h();
        });
        d.hover(function () {
            $('.arrow').show();
            clearInterval(j);
        }, function () {
            $('.arrow').hide();
            j = setInterval(h.bind(this, 1), 1000);
        });
        $('.arrow').children().eq(1).on('click', h.bind(this, 1));
        $('.arrow').children().eq(0).on('click', h.bind(this, 0));
        j = setInterval(h.bind(this, 1), 1000);
        function h(b) {
            if (arguments.length) f = b ? ++f == 6 ? f = 0 : f : f == 0 ? f = 5 : --f;
            d.find('div>ul li').removeClass('current').eq(f).addClass('current');
            $('.img-show').stop().animate({'opacity': 0}, 900);
            d.children('ul').find('li').removeClass('img-show').eq(f).stop().animate({'opacity': 1}, 900).addClass('img-show');
        }
    }
});