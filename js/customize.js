$(function(){
  // 좌측 사이드 패널  
  $('.top > .close').click(function () {
    $('#aside').addClass('panel--close');
    $('#wrap').addClass('panel--close');
  });
  $('#header > .open').click(function () {
    $('#aside').removeClass('panel--close');
    $('#wrap').removeClass('panel--close');
  });
});


