import { header, headerContainer, navLinks } from './header';
import footer from './footer';
import menuSection from './menu';
import chefSection from './chef';
import aboutSection from './about';
import homeSection from './home';
import contactSection from './contact';

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

function startPage() {
  const mainContent = document.getElementById('content');
  mainContent.appendChild(header);
  mainContent.appendChild(bodyContent);
  mainContent.appendChild(footer);
}

startPage();

document.addEventListener('click', event => {
  if (!event.target.dataset.action) {
    return;
  }

  if (event.target.dataset.action === 'home') {
    bodyContent.innerHTML = '';
    bodyContent.appendChild(homeSection);
  }
  if (event.target.dataset.action === 'about') {
    bodyContent.innerHTML = '';
    bodyContent.appendChild(aboutSection);
  }
  if (event.target.dataset.action === 'chef') {
    bodyContent.innerHTML = '';
    bodyContent.appendChild(chefSection);
  }
  if (event.target.dataset.action === 'menu') {
    bodyContent.innerHTML = '';
    bodyContent.appendChild(menuSection);
  }
  if (event.target.dataset.action === 'contact') {
    bodyContent.innerHTML = '';
    bodyContent.appendChild(contactSection);
  }
});
