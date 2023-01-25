import { nanoid } from "nanoid";
import React from "react";

export function ProjectsItem(props) {
  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
      <article
        key={props.id}
        className="mx-auto card text-white bg-dark mb-3"
        style={{ width: "21rem" }}
      >
        <a href={props.link} target="_blank">
          <img
            className="card-img-top"
            src={props.imgUrl}
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text m-0">{props.description}</p>
          <div>
            {props.stack.map((item) => (
              <img
                key={nanoid()}
                className="card-logos mt-2 mb-2 mx-1"
                src={item}
                alt="Skill Logo"
              />
            ))}
          </div>
          <a href={props.link} className="btn btn-primary" target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square" /> Website
          </a>
          {props.codeLink && (
            <a
              href={props.codeLink}
              className="btn btn-secondary ms-2"
              target=" _blank"
            >
              <i className="fa-brands fa-github" /> Code
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
