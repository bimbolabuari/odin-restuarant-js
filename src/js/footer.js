const footer = document.createElement('footer');

footer.classList.add('footer');

footer.innerHTML = `  
    <div class="container">
      <div class="right-text-content">
        <ul class="social-icons">
          <li class="social-list">
            <a href="https://github.com/bimbolabuari" target="_blank" class="social-link"><i class="fa fa-github"></i></a>
          </li>
          <li class="social-list">
            <a href="https://twitter.com/bimbolabuari" target="_blank" class="social-link"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="social-list">
            <a href="https://www.linkedin.com/in/bimbolabuari/" target="_blank" class="social-link"><i class="fa fa-linkedin"></i></a>
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
    <a href="https://github.com/bimbolabuari" target="_blank" class="copyright">© Copyright bimbolabuari.</a>
    <a href="https://templatemo.com/tm-558-klassy-cafe" target="_blank" class="copyright">Design:TemplateMo</a>
    </div>
`;

export default footer;
