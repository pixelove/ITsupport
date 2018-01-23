$(window).scroll(function() {
  if ($(window).scrollTop() > 300 ){
    $('.navbar').addClass('show');
  } else {
    $('.navbar').removeClass('show');
  };    
});