import portfolio from "../data/portfolio";

export function ProjectsItem({
  imgUrl,
  title,
  description,
  link,
  codeLink,
  stack,
}) {
  return (
    <div class="col-12 col-sm-12 col-lg-4 col-md-6">
      <article class="mx-auto card text-white bg-dark mb-3">
        <img class="card-img-top" src={imgUrl} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title fw-bold">{title}</h5>
          <p class="card-text m-0">{description}</p>
          <div>
            <img
              class="card-logos mt-2 mb-2 mr-1"
              src={stack}
              alt="Stack Logo"
            />
          </div>
          <a href={link} class="btn btn-primary" target="_blank">
            Website
          </a>
          <a href={codeLink} class="btn btn-primary" target="_blank">
            Code
          </a>
        </div>
      </article>
    </div>
  );
}
