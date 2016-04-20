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


var hd_elt_1 = document.getElementsByClassName('anim-top-1');
var hd_elt_2 = document.getElementsByClassName('anim-top-2');
var hd_elt_3 = document.getElementsByClassName('anim-top-3');
var hd_elt_4 = document.getElementsByClassName('anim-top-4');
var hd_elt_5 = document.getElementsByClassName('anim-top-5');


var header_tl = new TimelineLite();
var header_tl_2 = new TimelineLite();
var header_tl_3 = new TimelineLite();

header_tl.from(hd_elt_1 , 0.1, {y:100})
       .from(hd_elt_2, 0.7, {y:100, opacity:0}, '-=0.2')
       .from(hd_elt_3, 0.7, {y:100, opacity:0}, '-=0.2')
       .from(hd_elt_4, 0.7, {y:100, opacity:0}, '-=0.2')
       .from(hd_elt_5, 0.7, {y:100, opacity:0}, '-=0.2');


function scrollAnimation() {
  var m = 0.8; //device dependent slope???
  var t = m*window.scrollY;

    header_tl_2.to(hd_elt_1 , 0, {y:-t})
   .to(hd_elt_2, 0, {y:-t*0.75})
   .to(hd_elt_3, 0, {y:-t*0.5})
   .to(hd_elt_4, 0, {y:-t*0.25})
   .to(hd_elt_5, 0, {y:-t*0.125});
  
  console.log(t);
}