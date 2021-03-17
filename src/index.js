import { header, headerContainer, navLinks } from './header';
import footer from './footer';
// import menuSection from './menu';
// import chefSection from './chef';
// import aboutSection from './about';
// import contactSection from './contact';
// import homeSection from './home';

const bodyContent = document.createElement('main');

function toggle() {
  navLinks.classList.toggle('nav-active');
}

function navSlide() {
  const hamburger = document.createElement('div');
  hamburger.id = 'hamburger';
  hamburger.classList.add('hamburger');
  headerContainer.appendChild(hamburger);
  hamburger.innerHTML = `
     <div class="line1"></div>
     <div class="line2"></div>
     <div class="line3"></div>`;
  hamburger.addEventListener('click', toggle);
}
navSlide();

// document.addEventListener('click', event => {
// if (!event.target.dataset.action) {
//   return;
// }

// if (event.target.dataset.action === 'home') {
// }
// if (event.target.dataset.action === 'about') {
// }
//   if (event.target.dataset.action === 'chef') {
//     chefSection();
//   }
//   if (event.target.dataset.action === 'menu') {
//     menuSection();
//   }
// });

function startPage() {
  const mainContent = document.getElementById('content');
  mainContent.appendChild(header);
  mainContent.appendChild(bodyContent);
  mainContent.appendChild(footer);
}

startPage();
