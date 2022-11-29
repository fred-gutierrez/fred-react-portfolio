import portfolio from "../data/portfolio";

export function ProjectsItem() {
  return (
    <div class="col-12 col-sm-12 col-lg-6 col-md-6">
      <article class="mx-auto card text-white bg-dark mb-3">
        <img class="card-img-top" src={portfolio.imgUrl} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title font-weight-bold">{portfolio.title}</h5>
          <p class="card-text m-0">{portfolio.description}</p>
          <div>
            <img
              class="card-logos mt-2 mb-2 mr-1"
              src="/images/react-icon.png"
              alt="React Logo"
            />
            <img
              class="card-logos mt-2 mb-2 mr-1"
              src="/images/bootstrap-logo.svg"
              alt="Bootstrap Logo"
            />
            <img
              class="card-logos mt-2 mb-2 mr-1"
              src="/images/typescript.svg"
              alt="Typescript Logo"
            />
          </div>
          <a href={portfolio.link} class="btn btn-primary" target="_blank">
            Website
          </a>
          <a href={portfolio.codeLink} class="btn btn-primary" target="_blank">
            Code
          </a>
        </div>
      </article>
    </div>
  );
}
