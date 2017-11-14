(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {

    var $showList = $('#showList'),
        $tab_th = $('#tab_th'),
        $tab_ll = $('#tab_ll'),
        $price = $('#price'),
        thPrice,llPrice,
        $tab_footer = $('#tab_footer'),
        $btn = $('#btn');
    var $tab = function ($select) {
        $select.on('click','li',function () {
            var $index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active').end().parent().nextAll('div').eq($index).addClass('active').siblings().removeClass('active');
        });
    }
    $tab($tab_footer);
    $('#changeLi').on('click','li',function () {
        var $index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active').end().parent().nextAll('ul').eq($index).addClass('active').siblings().removeClass('active');
    });

    $tab_th.on('click','li',function () {
        var $this = $(this);
        $showList.children('li:nth-child(1)').addClass('act').end().children('li:nth-child(1)').children('i').text($(this).children('span:nth-child(1)').text());
        $this.addClass('active').siblings('li').removeClass('active');
        thPrice = parseInt($this.children('span:nth-child(2)').text());
        llPrice === undefined ? $price.text(0) : $price.text(thPrice + llPrice);
    });
    $tab_ll.on('click','li',function () {
        var $this = $(this);
        $showList.children('li:nth-child(2)').addClass('act').end().children('li:nth-child(2)').children('i').text($(this).children('span:nth-child(1)').text());
        $this.addClass('active').siblings('li').removeClass('active');
        llPrice = parseInt($this.children('span:nth-child(2)').text());
        thPrice === undefined ? $price.text(0) : $price.text(thPrice + llPrice);
    });
    $showList.on('click','li',function () {
        var $this = $(this);
        $price.text(0);
        $this.removeClass('act');
        $this.hasClass('th') ? $tab_th.children('li').removeClass('active') : $tab_ll.children('li').removeClass('active');
        $this.hasClass('ll') ? llPrice = undefined : thPrice = undefined;
    });
    $btn.on('click',function (e) {
        e.preventDefault();
        if(thPrice === undefined){
            alert('请您选择语音通话套餐!');
        }else if(llPrice === undefined){
            alert('请您选择上网流量套餐!');
        }else{
            window.location.href = '';
        }
    });
});
