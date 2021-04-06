const footer = document.createElement('footer');

footer.classList.add('footer');

footer.innerHTML = `  
    <div class="container">
      <div class="right-text-content">
        <ul class="social-icons">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <a href="index.html">
      <img src="../images/white-logo.png" alt=""/>
      </a>
    </div>
    <p class="copyright">${'© Copyright bimbolabuari.'}</p>
`;

export default footer;
