document.addEventListener("DOMContentLoaded", function(event) { 

  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keyup', function (e) {
    if(e.keyCode === 27)
     modal.classList.remove('modal--visible');
  }); 

  modal.addEventListener('click', function(event) {
    if (!modalDialog.contains(event.target))
    modal.classList.remove('modal--visible');
  }); 


});