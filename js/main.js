$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $('#navbar_tab').toggleClass('open');
        $('.banner').toggleClass('open');
    });

});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 600);

function hasScrolled() {
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
        if (st > lastScrollTop){
           // downscroll code
           $("#header").css({top:'-120px'})
           .hover(function(){$("#header").css({top: '0px'})})
       } else {
          // upscroll code
          $("#header").css({top:'0px'});
       }
       lastScrollTop = st;
    });
}
