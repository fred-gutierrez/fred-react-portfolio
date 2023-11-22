import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import React from "react";

export function ProjectsItem(props) {
  return (
    <div className="col-12 col-md-6">
      <article
        key={props.id}
        className="mx-auto card text-white bg-dark mb-3"
        style={{ maxWidth: 620 }}
      >
        <a href={props.link} target="_blank">
          <img
            className="card-img-top"
            src={props.imgUrl}
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h4 className="card-title fw-bold">{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <section>
            <h5 className="fw-bold mt-2 mb-0">Tech Stack</h5>
            <div className="d-flex flex-wrap">
              {props.stack.map((skills) => (
                <div className="d-flex my-1 me-1 align-items-center border border-2 border-secondary hover:border-white rounded-3 px-2">
                  <img
                    key={nanoid()}
                    className="card-logos"
                    src={skills.img}
                    alt={skills.alt}
                    style={{ width: 25 }}
                  />
                  <p className="ms-2 my-2">{skills.alt}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-2">
            <h5 className="fw-bold mb-1">Links</h5>
            <a href={props.link} className="btn btn-primary" target="_blank">
              <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />{" "}
              {props.fireFoxDownload || props.chromeDownload
                ? "Demo"
                : "Website"}
            </a>
            {props.codeLink && (
              <a
                href={props.codeLink}
                className="btn btn-secondary ms-2"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "github"]} /> Code
              </a>
            )}
            {props.chromeDownload && (
              <a
                href={props.chromeDownload}
                className="btn btn-success ms-2"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "chrome"]} /> Chrome
              </a>
            )}
            {props.fireFoxDownload && (
              <a
                href={props.fireFoxDownload}
                className="btn btn-warning ms-2"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "firefox-browser"]} /> Firefox
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
