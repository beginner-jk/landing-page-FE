// top button
import ScrollTo from './functions/scroll_speed.js';
const topBtn = document.querySelector('.top-btn');

// topBtn.addEventListener('click', (e) => {
  //   window.scrollTo({ top:0, behavior:'smooth' });
  // });
  topBtn.addEventListener('click', () => {
    ScrollTo(0, 200);
  });

// navbar button
const nav__ul = document.querySelectorAll('.nav__li');

nav__ul.forEach((li) => {
  li.addEventListener('click', activeBtn);
});

function activeBtn(e) {
  const allBtns = [...e.currentTarget.parentNode.children]
  const targetBtn = e.currentTarget;
  allBtns.forEach((btn) => { btn.classList.remove('active'); });
  targetBtn.classList.add('active');
}

// modal
const subscribeBtn = document.querySelector('.subscribe-btn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal .close-btn');

subscribeBtn.addEventListener('click', () => {
  modal.classList.remove('invisible');
});
modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) modal.classList.add('invisible');
});
modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('invisible');
});