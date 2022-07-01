//скрипт под изменение размера шапки
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
     'paddingTop': 0 // удаляем отступ у body, равный высоте шапки
    })
        header.css({
            'padding': '15px 0',
            'transition': '.3s'});
      }
    });
});
//изменение кнопки бургера меню
$(function() {
  $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
  });
});
//скрипт для бургера меню с убиранием скролла
let menuBtn = document.querySelector('#nav-icon1');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  if(menu.classList.contains('active')){
    $('html, body').css('overflow', 'hidden');
  } else {
    $('html, body').css('overflow', '');
  }
});
//скрипт для аккордиона меню
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        $(this).toggleClass("open");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



 
  



