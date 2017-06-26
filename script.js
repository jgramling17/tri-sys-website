$(window).load(function(){
    $('.main, .menu, .info').removeClass('hidden').addClass('fadeInUp animate');
    $('.loaderOverlay').css("display", "none");
});

$(document).ready(function(){
  var i = 0;
  var slides = ["#info1", "#info2", "#info3", "#info4"];
    $(window).scroll(function(){
      var topY = $(window).scrollTop();
        $('.threeD').each(function(){
          var $layer = $(this);
			    var yPos = -(topY * $layer.attr('speed') / 100);
			      $layer.css("transform", "translate(0px, " + yPos + "px)");
        });
        if(i<4 && topY >= $(slides[i]).position().top + 500){
          console.log(topY, $(window).height());
          console.log(slides, i, $(slides[i]).position());
          //var direction = $(this).attr('direction')
          $(slides[i]).removeClass('hidden').addClass('fadeInUp animate');
          i++;
        }
    });
    //$('.menuItem').hover(function(){
      //$(this).css("transform", "translate(20px, 0)");
    //});
});

