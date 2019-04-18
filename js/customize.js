$(function(){
  // 좌측 사이드 패널  
  $('.aside__top > .btn--close').click(function () {
    $('#aside').addClass('aside--close');
    $('#wrap').addClass('aside--close');
  });
  $('#header > .btn--open').click(function () {
    $('#aside').removeClass('aside--close');
    $('#wrap').removeClass('aside--close');
  });
});


