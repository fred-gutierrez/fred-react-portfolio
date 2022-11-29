export function ResumeDownloadButton() {
  return (
    <div className="container text-center">
      <a
        id="downloadbutton-link"
        href="https://drive.google.com/uc?export=download&id=12fdE4c37nSLkMlq7QrVsTuCypHysl7Sj"
        target="_blank"
        className="text-decoration-none"
      >
        <div id="downloadbutton-wrapper" class="slide-bottom">
          <div id="downloadbutton-iconwrapper">
            <i id="iconcv" class="fa-solid fa-code fa-2x"></i>
            <i id="downloadbutton-ring"></i>
          </div>
          <div id="downloadbutton-textwrapper">
            <p id="resume-text">Resume (CV)</p>
            <p id="resume-downloadtext">Download</p>
          </div>
        </div>
      </a>
    </div>
  );
}
