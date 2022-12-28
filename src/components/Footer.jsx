import BootstrapLogo from "/images/skills/bootstrap-logo.svg";
import ReactLogo from "/images/skills/react-icon.png";
import SassLogo from "/images/skills/sass-logo.webp";

export function Footer() {
  return (
    <footer className="pt-5 bg-black">
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
            </a>
            <a
              href="https://github.com/fred-gutierrez"
              class="slide-top mx-3"
              target="_blank"
            >
              <i class="fa-brands fa-github fa-3x"></i>
              <br />
            </a>

            <a
              href="https://www.linkedin.com/in/fred-david-solis-gutierrez-b0a51b1a8"
              class="slide-top"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-3x"></i>
              <br />
            </a>
          </div>
          <p class="col-12 text-center pb-4 pt-4 fs-6 text-muted">
            Built with <img src={ReactLogo} width="40px" alt="React Logo" />,{" "}
            <img src={SassLogo} alt="Sass Logo" width="40px" /> and{" "}
            <img
              src="images/skills/bootstrap-logo.svg"
              width="40px"
              alt={BootstrapLogo}
            />{" "}
            <span className="bootstrap-color">5</span> by{" "}
            <a>Fred David Solís Gutiérrez</a> | 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
