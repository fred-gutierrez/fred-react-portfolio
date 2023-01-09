import portfolio from "../../data/portfolio";
import { ProjectsItem } from "./ProjectsItem";

export function Projects() {
  return (
    <div>
      <h2 class="fw-bold text-center pt-5 text-white">Projects</h2>
      <div class="container mt-5">
        <div class="row">
          {portfolio.map((portfolio) => (
            <ProjectsItem
              imgUrl={portfolio.imgUrl}
              title={portfolio.title}
              description={portfolio.description}
              stack={portfolio.stack}
              link={portfolio.link}
              codeLink={portfolio.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
