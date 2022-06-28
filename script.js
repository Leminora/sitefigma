$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисление высоты шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
        header.addClass('header_fixed');
    $('body').css({
       'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
    });
        header.css({
            'padding': '5px 0',
            'transition': '.3s'
          });
      } else {
        header.removeClass('header_fixed');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
        header.css({
            'padding': '15px 0',
            'transition': '.3s'});
      }
    });
   });

   