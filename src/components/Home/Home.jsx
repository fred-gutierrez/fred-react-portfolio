import { BackgroundAnimation } from "./BackgroundAnimation";
import { ResumeDownloadButton } from "./ResumeDownloadButton";
import { useBlink } from "../../hooks/useBlink";

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
          <p className="fs-1 fw-bold m-0 lh-sm">
            Fred David
            <br />
            Solís Gutiérrez <br />
          </p>
          <span id="frontEndText" className="fs-2 fw-bold">
            Front-end Developer{underlineBlink()}
          </span>
          <p>
            Development of web sites and
            <br />
            applications with{" "}
            <i className="fa-brands fa-bootstrap bootstrap-color"></i>
            <span className="bootstrap-color fw-bold"> Bootstrap</span>,<br />
            <i className="fa-brands fa-react react-color"></i>
            <span className="react-color fw-bold"> React</span>,{" "}
            <i className="fa-brands fa-js javascript-color"></i>
            <span className="javascript-color fw-bold"> JavaScript</span> and
            more!{" "}
          </p>
          <ResumeDownloadButton />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}
