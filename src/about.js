const aboutSection = document.createElement('section');
aboutSection.classList.add('section');
aboutSection.id = 'about';
aboutSection.innerHTML = `
            <div class="about-container">
            <h6>${'About Us'}</h6>
            <h2>${'Hasty and tasty!'}</h2>
    
            <p>${'Klassy Cafe is one of the best restaurant in western part of Nigeria, Africa. Our passion is to serve you healthy and quality meals to satisfy your stomach needs, You are highly welcome to dine with us! Please contact us for delivery and reservation.'}
            </p>
            <div class="main-white-button white">
              <a href="./contact.html">${'Make A Reservation'}</a>
            </div>
          </div>
          <p class="center">${'Our Special Menus'}</p>
          <div class="menu-image">
            <img class="img" src="../images/01.jpg" alt="" /> 
            <img class="img" src="../images/02.jpg" alt="" />
            <img class="img" src="../images/03.jpg" alt="" />
            <img class="img" src="../images/04.jpg" alt="" />
            <img class="img" src="../images/05.jpg" alt="" />
            <img class="img" src="../images/06.jpg" alt="" />
            <img class="img" src="../images/07.jpg" alt="" />
            </div>`;

export default aboutSection;
