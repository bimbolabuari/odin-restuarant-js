import header from './header';
import footer from './footer';
import menuSection from './menu';
import chefSection from './chef';
import aboutSection from './about';
import homeSection from './home';
import contactSection from './contact';

const bodyContent = document.createElement('main');

const startPage = () => {
  const mainContent = document.getElementById('content');
  mainContent.appendChild(header);
  mainContent.appendChild(bodyContent);
  bodyContent.appendChild(homeSection);
  mainContent.appendChild(footer);
};

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

export default startPage;
