const header = document.createElement('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
header.classList.add('header');
header.appendChild(headerContainer);
headerContainer.innerHTML = `
                <nav class="nav-logo">
                  <a href="index.html" class="logo">
                    <img src="./assets/images/klassy-logo.png" />
                  </a>
                </nav>`;

const navLinks = document.createElement('ul');
navLinks.classList.add('nav');
headerContainer.appendChild(navLinks);
navLinks.innerHTML = ` 
        <li class="link"><button data-action="home" class="active">Home</button></li>
        <li class="link"><button data-action="about">About</button></li>
        <li class="link"><button data-action="menu">Menu</button></li>
        <li class="link"><button data-action="chef">Chefs</button></li>
        <li class="link"><button data-action="contact">Contact Us</button></li>`;

const navSlide = () => {
  const hamburger = document.createElement('div');
  hamburger.id = 'hamburger';
  hamburger.classList.add('hamburger');
  headerContainer.appendChild(hamburger);
  hamburger.innerHTML = `
             <div class="line1"></div>
             <div class="line2"></div>
             <div class="line3"></div>`;
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });
};
navSlide();

export default header;
