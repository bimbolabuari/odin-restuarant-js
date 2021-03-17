const homeSection = document.createElement('section');

homeSection.classList.add('section');
homeSection.id = 'home';

homeSection.innerHTML = `
  <div class="top">
  <div class="Modern-Slider">
    <div class="img-fill">
      <div class="intro">
        <h4>${'KlassyCafe'}</h4>
        <h6>${'THE BEST EXPERIENCE'}</h6>
        <div class="main-white-button">
          <a href="./contact.html">${'Make A Reservation'}</a>
        </div>
      </div>
    </div>
  </div>
</div>`;

export default homeSection;
