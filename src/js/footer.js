const footer = document.createElement('footer');

footer.classList.add('footer');

footer.innerHTML = `  
    <div class="container">
      <div class="right-text-content">
        <ul class="social-icons">
          <li class="social-list">
            <a href="#" class="social-link"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-list">
            <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="social-list">
            <a href="#" class="social-link"><i class="fa fa-linkedin"></i></a>
          </li>
          <li class="social-list">
            <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <a href="index.html">
      <img src="./assets/images/white-logo.png" alt=""/>
      </a>
    </div>
    <div>
    <p class="copyright">© Copyright bimbolabuari.</p>
    <p class="copyright">Design:TemplateMo</p>
    </div>
`;

export default footer;
