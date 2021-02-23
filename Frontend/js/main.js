$(document).ready(function(){
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  

  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();


	
});


$(function() {
  $('#produceplace').click(function() {
    $('#produceplace-info').fadeToggle();
    $('#cover').fadeToggle();
    $('body').off('scroll mousewheel touchmove');
    disableScroll();
  })
  $('#dragonwater').click(function() {
    $('#dragonwater-info').fadeToggle();
    $('#cover').fadeToggle();
    $('body').off('scroll mousewheel touchmove');
    disableScroll();
  })
  $('.close-btn').click(function(){
    $('#produceplace-info').fadeOut();
    $('#dragonwater-info').fadeOut();
    $('#cover').fadeOut();
    enableScroll();
  })
  $(document).mouseup(function (e) {
    var container = $("#produceplace-info");
    var cover = $("#cover")
    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
        container.fadeOut();
        cover.fadeOut();
        enableScroll();
    }
  });
  
});


function disableScroll() { 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 
