const input = document.body.querySelector('.feedback__input--tel');

input.addEventListener('keypress', (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  })

  input.addEventListener('focus', () => {
    if (input.value.length === 0) {
      input.value = '+7';
      input.selectionStart = input.value.length;
    }
  })

  input.addEventListener('click', (evt) => {
    if (input.selectionStart < 2) {
      input.selectionStart = input.value.length;
    }
    if (evt.key === 'Backspace' && input.value.length <= 2) {
      evt.preventDefault();
    }
  })

  input.addEventListener('blur', () => {
    if (input.value === '+7') {
      input.value = '';
    }
  })

  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace' && input.value.length <= 2) {
      evt.preventDefault();
    }
  })

// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

// (function () {
//   var navMain = document.querySelector('.main-nav__list');
//   var navButton = document.querySelector('.main-nav__button');

//   navMain.classList.remove('nav--nojs');

//   var openNav = function () {
//     if (navMain.classList.contains('nav--closed')) {
//           navMain.classList.remove('nav--closed');
//           navMain.classList.add('nav--opened');
//     } else {
//       navMain.classList.add('nav--closed');
//       navMain.classList.remove('nav--opened');
//     }
//   };

//   navToggle.addEventListener('click', openNav);
// })();
