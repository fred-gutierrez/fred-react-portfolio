import { nanoid } from "nanoid";
import projectsData from "../../data/projectsData";
import { ProjectsItem } from "./ProjectsItem";

export function Projects() {
  return (
    <div>
      <h2 class="fw-bold text-center pt-5 text-white">Projects</h2>
      <div class="container mt-5">
        <div class="row">
          {projectsData.map((props) => (
            <ProjectsItem
              key={nanoid()}
              imgUrl={props.imgUrl}
              title={props.title}
              description={props.description}
              stack={props.stack}
              link={props.link}
              codeLink={props.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
