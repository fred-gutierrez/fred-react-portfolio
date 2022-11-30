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
    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
      <article
        class="mx-auto card text-white bg-dark mb-3"
        style={{ width: "21rem" }}
      >
        <a href={link} target="_blank">
          <img class="card-img-top" src={imgUrl} alt="Card image cap" />
        </a>
        <div class="card-body">
          <h5 class="card-title fw-bold">{title}</h5>
          <p class="card-text m-0">{description}</p>
          <div>
            {stack.map((item) => (
              <img
                class="card-logos mt-2 mb-2 mx-1"
                src={item}
                alt="Skill Logo"
              />
            ))}
          </div>
          <a href={link} class="btn btn-primary" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square" /> Website
          </a>
          <a
            href={codeLink}
            class="btn btn-dark bg-gradient ms-2"
            target="_blank"
          >
            <i class="fa-brands fa-github" /> Code
          </a>
        </div>
      </article>
    </div>
  );
}
