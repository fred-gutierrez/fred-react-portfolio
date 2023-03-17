import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import ReactLogo from "/src/images/skills/react-icon.png";
import SassLogo from "/src/images/skills/sass-logo.webp";

export function Footer() {
  return (
    <footer className="pt-5 bg-black">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            {/* <a
              href="https://www.instagram.com/fredwilliamszy/"
              className="slide-top"
              target="_blank"
              aria-label="Instagram Link"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="fa-instagram"
                size="3x"
                style={{ fill: "url(#gradient-id)" }}
              />
              <br />
              <svg style={{ display: "none" }}>
                <defs>
                  <radialGradient id="gradient-id">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285aeb" />
                  </radialGradient>
                </defs>
              </svg>
            </a> */}
            {/* // TODO: Fix and  apply the  colors to the svg of the Instagram icon (NOT A TEXT) ./contact.scss */}
            <a
              href="https://github.com/fred-gutierrez"
              className="slide-top mx-2"
              target="_blank"
              aria-label="Github Link"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
              <br />
            </a>
            <a
              href="https://www.linkedin.com/in/fred-david-solis-gutierrez-b0a51b1a8"
              className="slide-top mx-2"
              target="_blank"
              aria-label="LinkedIn Link"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
              <br />
            </a>
          </div>
          <p className="col-12 text-center pb-4 pt-4 fs-6 text-muted">
            Built with <img src={ReactLogo} width="40px" alt="React Logo" />,{" "}
            <img src={SassLogo} alt="Sass Logo" width="40px" /> and{" "}
            <img src={BootstrapLogo} width="40px" alt="Bootstrap Logo" />{" "}
            <span className="bootstrap-color">5</span> by{" "}
            <a className="text-decoration-none text-muted" href="#home">
              Fred David Solís Gutiérrez
            </a>{" "}
            | 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
