import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ResumeDownloadButton() {
  //NaN
  return (
    <div className="container text-center">
      <a
        id="downloadbutton-link"
        href="https://drive.google.com/uc?export=download&id=13bLKXnpbuaAHRd6Nvww6nxMdZOmLcf35"
        target="_blank"
        className="text-decoration-none"
      >
        <div id="downloadbutton-wrapper" className="slide-bottom">
          <div id="downloadbutton-iconwrapper">
            <FontAwesomeIcon
              icon={["far", "file-pdf"]}
              size="2x"
              className="mt-2"
            />
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
