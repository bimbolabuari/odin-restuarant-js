const menuSection = document.createElement('section');

menuSection.classList.add('section');
menuSection.id = 'menu';
menuSection.innerHTML = `
    <div class="section-heading">
    <h2>${'Our Menu'}</h2>
    <h3>${'Our selection of cakes with quality taste'}</h3>
  </div>
  <div class="menu-item">

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-01.jpg" />
        <h6 class="price">${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description">${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}</p>
        <div class="main-text-button">
          <a href="#reservation"
            >${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
      </div>

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-02.jpg" />
        <h6 class="price">${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description">${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}
        </p>
        <div class="main-text-button">
          <a href="#reservation"> ${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-03.jpg" />
        <h6 class="price">${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description">${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}</p>
        <div class="main-text-button">
          <a href="#reservation"> ${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-04.jpg" />
        <h6 class="price">${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description"> ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}</p>
        <div class="main-text-button">
          <a href="#reservation">${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-05.jpg" />
        <h6 class="price">${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description"> ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}
        </p>
        <div class="main-text-button">
          <a href="#reservation">${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="menu-img" src="./assets/images/menu-item-01.jpg" />
        <h6 >${'$14'}</h6>
      <div class="info">
        <h2 class="title">${'Chocolate Cake'}</h2>
        <p class="description"> ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.'}
        </p>
        <div class="main-text-button">
          <a href="#reservation"> ${'Make Reservation'}
            <i class="fa fa-angle-down"></i>
          </a>
        </div>
      </div>
      </div>
  </div> `;

export default menuSection;
