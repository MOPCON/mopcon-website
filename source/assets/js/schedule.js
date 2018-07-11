$(function () {

  $('.tabs.day01').on('click', function () {
    $(this).addClass('active');
    $('.tabs.day02').removeClass('active');
     $('.container.day01').show();
     $('.container.day02').hide();
  })

  $('.tabs.day02').on('click', function () {
    $(this).addClass('active');
    $('.tabs.day01').removeClass('active');
    $('.container.day02').show();
    $('.container.day01').hide();
  })



})