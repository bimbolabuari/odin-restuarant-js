const chefSection = document.createElement('section');
chefSection.classList.add('section');
chefSection.id = 'chef';
chefSection.innerHTML = `
        <div class="section-heading">
          <h2>${'Our Chefs'}</h2>
          <h3>${'We offer the best ingredients for you'}</h3>
        </div>
        
        <div class="chef-container">
          <div class="img-container">
            <img src="../images/chefs-01.jpg" alt="Chef #1" />
            <p class="down-content">
            <h4>${'Randy Walker'}</h4>
            <span>${'Pastry Chef'}</span>
          </p>
          </div>

          <div class="img-container">
            <img src="../images/chefs-02.jpg" alt="Chef #1" />
            <p class="down-content">
            <h4>${'David Martin'}</h4>
            <span>${'Cookie Chef'}</span>
          </p>
          </div>

          <div class="img-container">
            <img src="../images/chefs-03.jpg" alt="Chef #1" />
            <p class="down-content">
            <h4>${'Randy Walker'}</h4>
            <span>${'Pastry Chef'}</span>
          </p>
          </div>
        </div>`;

export default chefSection;
