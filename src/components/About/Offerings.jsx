import GoogleLighthouseLogo from "/src/images/tools/google-lighthouse.svg";

export function Offerings() {
  return (
    <div>
      <h2 className="text-center text-white fw-bold text-uppercase pt-5 mb-5">
        About
      </h2>
      <div id="icon-container" className="container">
        <div className="row mb-5" id="icon-section1">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 offerings hidden">
            <div id="intuitive-icon" className="d-flex justify-content-center">
              <div className="circle1">
                <i className="fa-solid fa-eye fa-2x mt-3 blink-1"></i>
              </div>
            </div>
            <h3 className="fw-bold text-center text-white mt-1">Intuitive</h3>
            <p className="text-center text-white mb-5 aboutTextParagraph">
              High inclination for the ease of use, intuitive UX/UI.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 offerings hidden">
            <div id="fast-icon" className="d-flex justify-content-center">
              <div className="circle1">
                <i className="fa-solid fa-gauge-high fa-2x mt-3 shake-horizontal"></i>
              </div>
            </div>
            <h3 className="fw-bold text-center text-white mt-1">Fast</h3>
            <p className="text-center text-white mb-5 aboutTextParagraph">
              Quick load times accompanied with smooth interactivity. I use{" "}
              <img
                width={20}
                src={GoogleLighthouseLogo}
                alt="Google Lighthouse Logo"
              />{" "}
              Google Lighthouse to ensure this.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 offerings hidden">
            <div id="dynamic-icon" className="d-flex justify-content-center">
              <div className="circle1">
                <i className="fa-solid fa-rocket fa-2x mt-3 vibrate-1"></i>
              </div>
            </div>
            <h3 className="fw-bold text-center text-white mt-1">Dynamic</h3>
            <p className="text-center text-white mb-5 px-3 aboutTextParagraph">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 offerings hidden">
            <div id="responsive-icon" className="d-flex justify-content-center">
              <div className="circle1">
                <i className="fa-solid fa-laptop-code fa-2x mt-3 heartbeat"></i>
              </div>
            </div>
            <h3 className="fw-bold text-center text-white mt-1">Responsive</h3>
            <p className="text-center text-white mb-5 px-3 aboutTextParagraph">
              Mobile-first approach, my designs will work on any device/screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
