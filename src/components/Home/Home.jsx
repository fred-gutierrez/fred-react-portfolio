import { BackgroundAnimation } from "./BackgroundAnimation";
import { ResumeDownloadButton } from "./ResumeDownloadButton";
import { useBlink } from "../../hooks/useBlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  function underlineBlink() {
    const isVisible = useBlink(1200);

    return (
      <span style={{ visibility: isVisible ? "visible" : "hidden" }}>_</span>
    );
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div id="home-container" className="container show">
      <div className="row">
        {" "}
        <div className="text-white" style={{ margin: "25vh 0 0 0" }}>
          {" "}
          <p className="fs-1 fw-bold m-0 lh-sm home-animation">
            Fred David
            <br />
            Solís Gutiérrez <br />
          </p>
          <span id="frontEndText" className="fs-2 fw-bold home-animation">
            Front-end Developer{underlineBlink()}
          </span>
          <p className="home-animation">
            Development of web sites and
            <br />
            applications with{" "}
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              className="bootstrap-color"
            />
            <span className="bootstrap-color fw-bold"> Bootstrap</span>,<br />
            <FontAwesomeIcon icon={["fab", "react"]} className="react-color" />
            <span className="react-color fw-bold"> React</span>,{" "}
            <FontAwesomeIcon
              icon={["fab", "js"]}
              className="javascript-color"
            />
            <span className="javascript-color fw-bold"> JavaScript</span> and
            more!{" "}
          </p>
          <div className="home-animation">
            <ResumeDownloadButton />
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}
