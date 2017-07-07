$(window).load(function(){
    $('.main, .info').removeClass('hidden').addClass('fadeInUp animate');
    $('.loaderOverlay').css("display", "none");
});

$(document).ready(function(){
  executeParallax();
});

function executeParallax() {
  var i = 0;
  var slides = ["#info1", "#info2", "#info3", "#info4"];
  var menuBarSide = $('.menu');
  var menuBarTop = $('.menuTop');
    $(window).scroll(function(){
      console.log(!menuBarSide.hasClass('hidden'));
      var topY = $(window).scrollTop();
        $('.threeD').each(function(){
          var $layer = $(this);
			    var yPos = -(topY * $layer.attr('speed') / 100);
			      $layer.css("transform", "translate3d(0px, " + yPos + "px, 0px)");
        });
       if (topY > menuBarTop.height() && $('.loaderOverlay').css("display") === "none"){
          menuBarSide.removeClass('hidden fadeOutUp').addClass('fadeInRight');
          } else if (topY < menuBarTop.height() && $('.loaderOverlay').css("display") === "none" && !menuBarSide.hasClass('hidden')){
          menuBarSide.removeClass('hidden fadeInRight').addClass('fadeOutUp');
        }
        if(i<4 && topY >= $(slides[i]).position().top + 700){
          //var direction = $(this).attr('direction')
          $(slides[i]).removeClass('hidden').addClass('fadeInUp animate');
          i++;
        }
    });
    //$('.menuItem').hover(function(){
      //$(this).css("transform", "translate(20px, 0)");
    //});
}
