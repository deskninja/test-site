function footerAlign() {
  $('footer').css('display', 'block');
  $('footer').css('height', 'auto');
  var footerHeight = $('footer').outerHeight();
  $('body').css('padding-bottom', footerHeight);
  $('footer').css('height', footerHeight);
}

/*function headerAlign() {
  $('header').css('display', 'block');
  $('header').css('height', 'auto');
  var headerHeight = $('header').outerHeight();
  $('body').css('padding-top', headerHeight);
  $('header').css('height', headerHeight);
}*/

$(document).ready(function(){
  footerAlign();
  //headerAlign();
});

$( window ).resize(function() {
  footerAlign();
  //headerAlign();
});
