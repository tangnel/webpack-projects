import '../css/reset.css';
import '../css/list.css';
import '../webfont/iconfont.css';
import '../css/meituanIndex.css';

import $ from 'jquery';
window.$ = $;

function getData() {
    $.ajax({
        url: 'http://localhost:8989/api/list.json',
        dataType: 'json',
        type: 'get',
        success: function (res) {
            // console.log(res);
            renderList(res);

        }
    })
}
getData();
function renderList(res) {
    var str = '';
    res.list.forEach(function (item) {
        str += '<li class="foodspic">\
    <a href="http://localhost:8989/detail.html?id='+ item.id + '" class="clearfix">\
        <img src="'+ item.info.imgurl + '" alt="">\
        <dl><dt>'+ item.info.name + '</dt><dd>\
                <p class="foodtitle">'+ item.info.des + '</p>\
                <p class="price"><span><strong>'+ item.info.price + '</strong><i>元</i></span>\
                    <span>'+ item.info.newUser + '</span><span>' + item.info.sale + '</span>\
                </p></dd></dl></a></li>';
    });
    $(".list").html(str);

}

$(window).on("scroll",function(){
    var top = $(window).scrollTop();
    if(top>500){
        $("#gotop").slideDown();
    }else{
        $("#gotop").slideUp();
    }
   
})

$("#gotop").click(function(){
    $('html,body').animate({
        scrollTop:0
    })
})