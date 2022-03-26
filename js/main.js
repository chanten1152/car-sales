// $('.el_menu').on('click', function () {
//   console.log('こんにちは');
//   $('.header').addClass('is-active');
// });
// $('.el_menu').on('click', function () {
//   console.log('こんにちは');
//   $('.bl_burger').addClass('is-active');
// });
// $('.el_menu').on('click', function () {
//   $('.header').removeClass('is-active');
// });
// $('.el_menu').on('click', function () {
//   $('.bl_burger').removeClass('is-active');
// });
  //ハンバーガーメニュー
  var btnMenu = $('.el_menu');
  var globalNav = $('.bl_burger');
  var menuNav = $('.header');
  
  btnMenu.on('click', function () {
    globalNav.toggleClass('is-active');
    menuNav.toggleClass('is-active');
  });