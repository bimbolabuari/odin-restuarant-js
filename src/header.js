const header = document.createElement('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
header.classList.add('header');
header.appendChild(headerContainer);
headerContainer.innerHTML = `
                <nav class="nav-logo">
                  <a href="index.html" class="logo">
                    <img src="../images/klassy-logo.png" />
                  </a>
                </nav>`;

const navLinks = document.createElement('ul');
navLinks.classList.add('nav');
headerContainer.appendChild(navLinks);
navLinks.innerHTML = ` 
        <li class="link"><button data-action="home" class="active">${'Home'}</button></li>
        <li class="link"><button data-action="about">${'About'}</button></li>
        <li class="link"><button data-action="menu">${'Menu'}</button></li>
        <li class="link"><button data-action="chef">${'Chefs'}</button></li>
        <li class="link"><button data-action="contact">${'Contact Us'}</button></li>`;

export { header, headerContainer, navLinks };
