// document.addEventListener("DOMContentLoaded", function(event) { 

//   const modal = document.querySelector('.modal');
//   const modalDialog = document.querySelector('.modal__dialog');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');

//   document.addEventListener('keyup', function (e) {
//     if(e.keyCode === 27)
//      modal.classList.remove('modal--visible');
//   }); 

//   modal.addEventListener('click', function(event) {
//     if (!modalDialog.contains(event.target))
//     modal.classList.remove('modal--visible');
//   }); 


// });

$(document).ready(function() {

  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      modalDialog = $('.modal__dialog');

      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function (){
        modal.toggleClass('modal--visible');
      });

$(function() {
  $(window).scroll(function() {      //событие прокрутки окна
    if($(this).scrollTop() != 0) {      //если не крайнее верхнее положение
      $(".topbtn").fadeIn();         //появится кнопка прокрутки наверх
    } else {                         //иначе 
      $(".topbtn").fadeOut();         //пропадёт
    }
  });

  $(".topbtn").click(function() {      //событие клика по кнопке
    $('body,html').animate({scrollTop:0},800);   //анимированная прокрутка со
                                                 // скоростью 800
    });
  });

  $(modal).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal__dialog"); // тут указываем  элемент
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".modal").removeClass("modal--visible") // убираем модификатор у .modal
		}
	});

  $(document).keyup(function (e){ // событие нажатия кнопки
		if (e.which == 27)  { // нажатие на esc
			$(".modal").removeClass("modal--visible") // убираем модификатор у .modal
		}
  });
  
});