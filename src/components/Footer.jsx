export function Footer() {
  return (
    <footer className="vh-25 pt-5">
      <div class="container">
        <div id="social-media" class="row">
          <div class="col-12 d-flex justify-content-center">
            <a
              href="https://www.instagram.com/fredwilliamszy/"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-instagram fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>
            <a
              href="https://github.com/fred-gutierrez"
              class="slide-top mx-3"
              target="_blank"
            >
              <i class="fa-brands fa-github fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>

            <a
              href="https://www.linkedin.com/in/fred-david-solis-gutierrez-b0a51b1a8"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-3x"></i>
              <br />
              <span class="footer-t"></span>
            </a>
          </div>
          <p class="col-12 text-center pb-4 pt-4 fs-6 text-muted">
            Built with{" "}
            <img src="images/react-icon.png" width="40px" alt="React Logo" />,{" "}
            <img src="images/sass-logo.webp" alt="Sass Logo" width="40px" /> and{" "}
            <img
              src="images/bootstrap-logo.svg"
              width="40px"
              alt="Bootstrap Logo"
            />{" "}
            <span className="bootstrap-color">5</span> by{" "}
            <a>Fred David Solís Gutiérrez</a> | 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
