var i = 0;
var winHeight = $( window ).height();
var pages = [$('#about'), $('#process'), $('#contact')];
function moveOnScroll ( event ) {
  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
	if (i < pages.length) {
    	pages[i].css("top", (pages[i].position().top-30));
    	if (pages[i].position().top <= 0) {
    		pages[i].css("top", 0);
    		i==pages.length-1?i=pages.length-1:i++;
    	}
	}
  } else {
    if (i >= 0) {
    	pages[i].css("top", (pages[i].position().top+30));
    	if (pages[i].position().top > $( window ).height()) {
    		i==0?pages[i].css("top", $( window ).height()):true;
    		i==0?i=0:i--;
    	}
	}
  }
  //prevent page fom scrolling
  return false;
}

$( document.body ).on( 'DOMMouseScroll mousewheel', moveOnScroll);
$("#about").css("top", $( window ).height());
$("#process").css("top", $( window ).height());
$("#contact").css("top", $( window ).height());