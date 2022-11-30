export function Footer() {
  return (
    <div>
      <div class="container gs_reveal">
        <div id="social-media" class="row">
          <div class="col-12 d-flex justify-content-center">
            <a
              id="sm-1"
              href="https://www.instagram.com/fredwilliamszy/"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-instagram fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>

            <a
              id="sm-2"
              href="https://github.com/fred-gutierrez"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-github fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>

            <a
              id="sm-3"
              href="https://www.linkedin.com/in/fred-david-solis-gutierrez-b0a51b1a8"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>
          </div>
        </div>
      </div>
      <p class="col-12 gs_reveal" id="copyright">
        Built with
        <img
          src="images/sass-logo.webp"
          width="40px"
          height="40px"
          alt="Sass Logo"
        />
        ,
        <img
          src="images/bootstrap-logo.svg"
          alt="Bootstrap Logo"
          width="40px"
          height="40px"
        />
        and
        <img
          src="images/gsap-greensock.svg"
          width="40px"
          height="40px"
          alt="GreenSock Logo"
        />
        by
        <a style="color: rgb(255, 255, 255)">Fred David Solís Gutiérrez</a>|
        2022
      </p>
    </div>
  );
}
