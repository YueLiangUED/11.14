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
        $tab_dx = $('#tab_dx'),
        $price = $('#price'),
        thPrice,llPrice,dxPrice,
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
        if(thPrice !== undefined && llPrice !== undefined && dxPrice === undefined){
            $price.text(thPrice + llPrice + (Boolean(dxPrice) - 0));
        }else if(thPrice !==undefined && llPrice !== undefined && dxPrice !== undefined){
            $price.text(thPrice + llPrice + dxPrice);
        }else{
            $price.text(0);
        }
        //llPrice === undefined ? $price.text(0) : $price.text(thPrice + llPrice);
    });
    $tab_ll.on('click','li',function () {
        var $this = $(this);
        $showList.children('li:nth-child(2)').addClass('act').end().children('li:nth-child(2)').children('i').text($(this).children('span:nth-child(1)').text());
        $this.addClass('active').siblings('li').removeClass('active');
        llPrice = parseInt($this.children('span:nth-child(2)').text());
        if(thPrice !== undefined && llPrice !== undefined && dxPrice === undefined){
            $price.text(thPrice + llPrice + (Boolean(dxPrice) - 0));
        }else if(thPrice !==undefined && llPrice !== undefined && dxPrice !== undefined){
            $price.text(thPrice + llPrice + dxPrice);
        }else{
            $price.text(0);
        }
        //thPrice === undefined ? $price.text(0) : $price.text(thPrice + llPrice);
    });

    $tab_dx.on('click','li',function () {
        var $this = $(this);
        $showList.children('li:nth-child(3)').addClass('act').end().children('li:nth-child(3)').children('i:nth-child(2)').text($(this).children('span:nth-child(1)').text());
        $this.addClass('active').siblings('li').removeClass('active');
        dxPrice = parseInt($this.children('span:nth-child(2)').text());
        if(thPrice !== undefined && llPrice !== undefined){
            $price.text(thPrice + llPrice + dxPrice);
        }else{
            $price.text(0);
        }
    });
    $showList.on('click','li',function () {
        var $this = $(this);
        if($this.hasClass('dx') === false){
            $price.text(0);
        }else if($this.hasClass('dx') === true && thPrice !== undefined && llPrice !== undefined){
            $price.text(thPrice + llPrice);
        }
        $this.removeClass('act');
        $this.hasClass('th') ? $tab_th.children('li').removeClass('active') : ($this.hasClass('ll') ? $tab_ll.children('li').removeClass('active') : $tab_dx.children('li').removeClass('active'));
        if($this.hasClass('ll')){
            llPrice = undefined;
        }else if($this.hasClass('th')){
            thPrice = undefined;
        }
        //$this.hasClass('ll') ? llPrice = undefined : thPrice = undefined;
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
