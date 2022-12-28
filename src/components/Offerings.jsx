export function Offerings() {
  return (
    <div>
      <h2 className="text-center text-white fw-bold text-uppercase pt-5 mb-5">
        About
      </h2>
      <div id="icon-container" class="container">
        <div class="row mb-5" id="icon-section1">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div id="intuitive-icon" class="d-flex justify-content-center">
              <div class="circle1">
                <i class="fa-solid fa-eye fa-2x mt-3 blink-1"></i>
              </div>
            </div>
            <h3 class="fw-bold text-center text-white mt-1">Intuitive</h3>
            <p class="text-center text-white mb-5 aboutTextParagraph">
              High inclination for the ease of use, intuitive UX/UI.
            </p>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div id="fast-icon" class="d-flex justify-content-center">
              <div class="circle1">
                <i class="fa-solid fa-gauge-high fa-2x mt-3 shake-horizontal"></i>
              </div>
            </div>
            <h3 class="fw-bold text-center text-white mt-1">Fast</h3>
            <p class="text-center text-white mb-5 aboutTextParagraph">
              Quick load times accompanied with smooth interactivity. I use{" "}
              <img
                width={20}
                src="/images/google-lighthouse.svg"
                alt="Google Lighthouse Logo"
              />{" "}
              Google Lighthouse to ensure this.
            </p>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div id="dynamic-icon" class="d-flex justify-content-center">
              <div class="circle1">
                <i class="fa-solid fa-rocket fa-2x mt-3 vibrate-1"></i>
              </div>
            </div>
            <h3 class="fw-bold text-center text-white mt-1">Dynamic</h3>
            <p class="text-center text-white mb-5 px-3 aboutTextParagraph">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div id="responsive-icon" class="d-flex justify-content-center">
              <div class="circle1">
                <i class="fa-solid fa-laptop-code fa-2x mt-3 heartbeat"></i>
              </div>
            </div>
            <h3 class="fw-bold text-center text-white mt-1">Responsive</h3>
            <p class="text-center text-white mb-5 px-3 aboutTextParagraph">
              Mobile-first approach, my designs will work on any device/screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
