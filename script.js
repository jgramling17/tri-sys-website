$(window).load(function(){
    $('.main, .Home').removeClass('hidden').addClass('fadeInUp animate');
    $('.loaderOverlay').css("display", "none");
});

$(document).ready(function(){
  executeParallax();
  pageTransitions();
});

function executeParallax() {
  var i = 0;
  var homeSlides = ["#info1", "#info2", "#info3", "#info4"];
  var menuBarSide = $('.menu');
  var menuBarTop = $('.menuTop');
    $(window).scroll(function(){
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
        if(i<4 && topY >= $(homeSlides[i]).position().top + 600){
          //var direction = $(this).attr('direction')
          $(homeSlides[i]).removeClass('hidden').addClass('fadeInUp animate');
          i++;
        }
    });
    //$('.menuItem').hover(function(){
      //$(this).css("transform", "translate(20px, 0)");
    //});
}



function pageTransitions() {
  var pages = $(".menuTop").children().toArray();
  $.each(pages, function(){
    $(this).click(function(){
      $.each(pages, function(){
        if(!$($(this).attr('page')).hasClass("paged"))
          {
            $($(this).attr('page')).addClass("paged");
          }
      });
      $($(this).attr('page')).addClass("fadeInUp").removeClass("paged");
      $('html,body').animate({scrollTop: $('#par5').offset().top + $('#par5').outerHeight(true) - 100});
      console.log($('#par5').offset().top + $('#par5').outerHeight(true) - 100)
      })
  });
  var sideBarPages = $(".menuItem").toArray();
  $.each(sideBarPages, function(){
    $(this).click(function(){
      $.each(sideBarPages, function(){
        if(!$($(this).attr('page')).hasClass("paged"))
          {
            $($(this).attr('page')).removeClass("fadeInUp").addClass("paged");
          }
      });
      $($(this).attr('page')).addClass("fadeInUp").removeClass("paged");
      })
  });
  
}


