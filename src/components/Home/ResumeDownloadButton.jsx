export function ResumeDownloadButton() {
  //NaN
  return (
    <div className="container text-center">
      <a
        id="downloadbutton-link"
        href="https://drive.google.com/uc?export=download&id=12lHQotdnjxjXK9MBWjtnccwx3l60Bwyi"
        target="_blank"
        className="text-decoration-none"
      >
        <div id="downloadbutton-wrapper" className="slide-bottom">
          <div id="downloadbutton-iconwrapper">
            <i id="iconcv" class="fa-regular fa-file-pdf fa-2x"></i>
            <i id="downloadbutton-ring"></i>
          </div>
          <div className="text-start d-grid text-black">
            <p className="fw-bold m-0">Resume (CV)</p>
            <p className="m-0" id="resume-downloadtext">
              Download
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
