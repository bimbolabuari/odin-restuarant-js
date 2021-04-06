(() => {
  const n = document.createElement('header');
  const e = document.createElement('div');
  e.classList.add('header-container'),
    n.classList.add('header'),
    n.appendChild(e),
    (e.innerHTML =
      '\n                <nav class="nav-logo">\n                  <a href="index.html" class="logo">\n                    <img src="../images/klassy-logo.png" />\n                  </a>\n                </nav>');
  const i = document.createElement('ul');
  i.classList.add('nav'),
    e.appendChild(i),
    (i.innerHTML =
      ' \n        <li class="link"><button data-action="home" class="active">Home</button></li>\n        <li class="link"><button data-action="about">About</button></li>\n        <li class="link"><button data-action="menu">Menu</button></li>\n        <li class="link"><button data-action="chef">Chefs</button></li>\n        <li class="link"><button data-action="contact">Contact Us</button></li>');
  const a = document.createElement('footer');
  a.classList.add('footer'),
    (a.innerHTML =
      '  \n    <div class="container">\n      <div class="right-text-content">\n        <ul class="social-icons">\n          <li>\n            <a href="#"><i class="fa fa-facebook"></i></a>\n          </li>\n          <li>\n            <a href="#"><i class="fa fa-twitter"></i></a>\n          </li>\n          <li>\n            <a href="#"><i class="fa fa-linkedin"></i></a>\n          </li>\n          <li>\n            <a href="#"><i class="fa fa-instagram"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="logo">\n      <a href="index.html">\n      <img src="../images/white-logo.png" alt=""/>\n      </a>\n    </div>\n    <p class="copyright">© Copyright bimbolabuari.</p>\n');
  const s = a;
  const t = document.createElement('section');
  t.classList.add('section'),
    (t.id = 'menu'),
    (t.innerHTML =
      '\n    <div class="section-heading">\n    <h2>Our Menu</h2>\n    <h3>Our selection of cakes with quality taste</h3>\n  </div>\n  <div class="menu-item">\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-01.jpg" />\n        <h6 class="price">$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>\n        <div class="main-text-button">\n          <a href="#reservation"\n            >Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n      </div>\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-02.jpg" />\n        <h6 class="price">$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.\n        </p>\n        <div class="main-text-button">\n          <a href="#reservation"> Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-03.jpg" />\n        <h6 class="price">$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>\n        <div class="main-text-button">\n          <a href="#reservation"> Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-04.jpg" />\n        <h6 class="price">$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>\n        <div class="main-text-button">\n          <a href="#reservation">Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-05.jpg" />\n        <h6 class="price">$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.\n        </p>\n        <div class="main-text-button">\n          <a href="#reservation">Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="item">\n      <img class="menu-img" src="../images/menu-item-01.jpg" />\n        <h6 >$14</h6>\n      <div class="info">\n        <h2 class="title">Chocolate Cake</h2>\n        <p class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.\n        </p>\n        <div class="main-text-button">\n          <a href="#reservation"> Make Reservation\n            <i class="fa fa-angle-down"></i>\n          </a>\n        </div>\n      </div>\n      </div>\n  </div> ');
  const o = t;
  const c = document.createElement('section');
  c.classList.add('section'),
    (c.id = 'chef'),
    (c.innerHTML =
      '\n        <div class="section-heading">\n          <h2>Our Chefs</h2>\n          <h3>We offer the best ingredients for you</h3>\n        </div>\n        \n        <div class="chef-container">\n          <div class="img-container">\n            <img src="../images/chefs-01.jpg" alt="Chef #1" />\n            <p class="down-content">\n            <h4>Randy Walker</h4>\n            <span>Pastry Chef</span>\n          </p>\n          </div>\n\n          <div class="img-container">\n            <img src="../images/chefs-02.jpg" alt="Chef #1" />\n            <p class="down-content">\n            <h4>David Martin</h4>\n            <span>Cookie Chef</span>\n          </p>\n          </div>\n\n          <div class="img-container">\n            <img src="../images/chefs-03.jpg" alt="Chef #1" />\n            <p class="down-content">\n            <h4>Randy Walker</h4>\n            <span>Pastry Chef</span>\n          </p>\n          </div>\n        </div>');
  const d = c;
  const l = document.createElement('section');
  l.classList.add('section'),
    (l.id = 'about'),
    (l.innerHTML =
      '\n            <div class="about-container">\n            <h6>About Us</h6>\n            <h2>Hasty and tasty!</h2>\n    \n            <p>Klassy Cafe is one of the best restaurant in western part of Nigeria, Africa. Our passion is to serve you healthy and quality meals to satisfy your stomach needs, You are highly welcome to dine with us! Please contact us for delivery and reservation.\n            </p>\n            <div class="main-white-button white">\n              <a href="./contact.html">Make A Reservation</a>\n            </div>\n          </div>\n          <p class="center">Our Special Menus</p>\n          <div class="menu-image">\n            <img class="img" src="../images/01.jpg" alt="" /> \n            <img class="img" src="../images/02.jpg" alt="" />\n            <img class="img" src="../images/03.jpg" alt="" />\n            <img class="img" src="../images/04.jpg" alt="" />\n            <img class="img" src="../images/05.jpg" alt="" />\n            <img class="img" src="../images/06.jpg" alt="" />\n            </div>');
  const r = l;
  const m = document.createElement('section');
  m.classList.add('section'),
    (m.id = 'home'),
    (m.innerHTML =
      '\n  <div class="top">\n  <div class="Modern-Slider">\n    <div class="img-fill">\n      <div class="intro">\n        <h4>KlassyCafe</h4>\n        <h6>THE BEST EXPERIENCE</h6>\n        <div class="main-white-button">\n          <a href="./contact.js">Make A Reservation</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
  const p = m;
  const h = document.createElement('section');
  h.classList.add('section'),
    (h.id = 'contact'),
    (h.innerHTML =
      '\n  <div class="">\n  <h3 class="contact"> Contact Us </h3>\n  <h4 class="h4">Here You Can Make A Reservation Or Just walkin to our cafe</h4>\n</div>\n<p class="paragraph">Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.\n</p>\n<div class="phone">\n  <i class="fa fa-phone"></i>\n  <h4>Phone Numbers</h4>\n  <span\n    ><a href="#">080-090-0990</a><br />\n    <a href="#">080-090-0880</a>\n  </span>\n</div>\n<div class="message">\n  <i class="fa fa-envelope"></i>\n  <h4>Emails</h4>\n  <span>\n    <a href="#">hello@company.com</a>\n    <br /><a href="#">info@company.com</a>\n  </span>\n</div>\n\n<form class="form" action="" method="post">\n  <h4>Table Reservation</h4>\n\n  <fieldset>\n    <input name="name" type="text" id="name" placeholder="Your Name" required="" />\n  </fieldset>\n\n  <fieldset>\n    <input\n      name="email"\n      type="text"\n      id="email"\n      pattern="[^ @]*@[^ @]*"\n      placeholder="Your Email Address"\n      required=""\n    />\n  </fieldset>\n\n  <fieldset>\n    <input name="phone" type="text" id="phone" placeholder="Phone Number" required="" />\n  </fieldset>\n\n  <fieldset>\n    <select value="number-guests" name="number-guests" id="number-guests">\n      <option value="number-guests">Number Of Guests</option>\n      <option name="1" id="1">1</option>\n      <option name="2" id="2">2</option>\n      <option name="3" id="3">3</option>\n      <option name="4" id="4">4</option>\n      <option name="5" id="5">5</option>\n      <option name="6" id="6">6</option>\n      <option name="7" id="7">7</option>\n      <option name="8" id="8">8</option>\n      <option name="9" id="9">9</option>\n      <option name="10" id="10">10</option>\n      <option name="11" id="11">11</option>\n      <option name="12" id="12">12</option>\n    </select>\n  </fieldset>\n\n  <fieldset>\n    <input name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy" />\n  </fieldset>\n\n  <fieldset>\n    <select value="time" name="time" id="time">\n      <option value="time">Time</option>\n      <option name="Breakfast" id="Breakfast">Breakfast</option>\n      <option name="Lunch" id="Lunch">Lunch</option>\n      <option name="Dinner" id="Dinner">Dinner</option>\n    </select>\n  </fieldset>\n\n  <fieldset>\n    <textarea\n      name="message"\n      rows="6"\n      id="message"\n      placeholder="Click here for message..."\n      required=""\n    ></textarea>\n  </fieldset>\n  <button type="submit" id="form-submit" class="form-button"> Make A Reservation </button>\n</form>');
  const u = h;
  const v = document.createElement('main');
  function g() {
    i.classList.toggle('nav-active');
  }
  !(function() {
    const n = document.createElement('div');
    (n.id = 'hamburger'),
      n.classList.add('hamburger'),
      e.appendChild(n),
      (n.innerHTML =
        '\n     <div class="line1"></div>\n     <div class="line2"></div>\n     <div class="line3"></div>'),
      n.addEventListener('click', g);
  })(),
    (function() {
      const e = document.getElementById('content');
      e.appendChild(n), e.appendChild(v), e.appendChild(s);
    })(),
    document.addEventListener('click', n => {
      n.target.dataset.action &&
        (n.target.dataset.action === 'home' && ((v.innerHTML = ''), v.appendChild(p)),
        n.target.dataset.action === 'about' && ((v.innerHTML = ''), v.appendChild(r)),
        n.target.dataset.action === 'chef' && ((v.innerHTML = ''), v.appendChild(d)),
        n.target.dataset.action === 'menu' && ((v.innerHTML = ''), v.appendChild(o)),
        n.target.dataset.action === 'contact' && ((v.innerHTML = ''), v.appendChild(u)));
    });
})();
