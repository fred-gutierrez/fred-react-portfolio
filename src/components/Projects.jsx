import { ProjectsItem } from "./ProjectsItem";

export function Projects() {
  return (
    <div>
      <h2 class="fw-bold text-center pt-5 text-white">Projects</h2>
      <div class="container mt-5">
        <div class="row">
          <ProjectsItem />
        </div>
      </div>
    </div>
  );
}
