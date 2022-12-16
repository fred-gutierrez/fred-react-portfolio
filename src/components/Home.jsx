import { ResumeDownloadButton } from "./ResumeDownloadButton";

export function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="text-white text-center" style={{ margin: "25vh 0 0 0" }}>
          <h1 className="fs-1 fw-bold m-0">
            Fred David
            <br />
            Solís Gutiérrez
            <br />
          </h1>
          <span id="frontEndText" className="fs-2 fw-bold">
            Front-end Developer
          </span>
          <p>
            Development of web sites and
            <br />
            applications with{" "}
            <i class="fa-brands fa-bootstrap bootstrap-color"></i>
            <span class="bootstrap-color fw-bold"> Bootstrap</span>,<br />
            <i class="fa-brands fa-react react-color"></i>
            <span class="react-color fw-bold"> React</span>,{" "}
            <i class="fa-brands fa-js javascript-color"></i>
            <span class="javascript-color fw-bold"> JavaScript</span> and more!
          </p>
        </div>
      </div>
      <ResumeDownloadButton />
    </div>
  );
}
