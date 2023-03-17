import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            {props.stack.map((skills) => (
              <img
                key={nanoid()}
                className="card-logos my-2 mx-1"
                src={skills.img}
                alt={skills.alt}
              />
            ))}
          </div>
          <a href={props.link} className="btn btn-primary" target="_blank">
            <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />{" "}
            Website
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
        </div>
      </article>
    </div>
  );
}
