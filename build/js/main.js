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

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const navMain = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-nav__button');

const contactList = document.querySelector('.contact__list');
const contactToggle = document.querySelector('.contact__button');

navMain.classList.remove('nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('closed')) {
    navMain.classList.remove('closed');
    navMain.classList.add('opened');
  } else {
    navMain.classList.add('closed');
    navMain.classList.remove('opened');
  }
});

contactList.classList.remove('nojs');

contactToggle.addEventListener('click', function() {
  if (contactList.classList.contains('closed')) {
    contactList.classList.remove('closed');
    contactList.classList.add('opened');
  } else {
    contactList.classList.add('closed');
    contactList.classList.remove('opened');
  }
});

const modalButton = document.querySelector('.info-company__button');
const modal = document.querySelector('.modal');

modalButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal__show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (modal.classList.contains("modal__show")) {
    modal.classList.remove("modal__show");
    }
  }
});

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
