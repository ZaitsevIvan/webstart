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
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
  });
});