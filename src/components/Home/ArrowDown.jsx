import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ArrowDown() {
  window.addEventListener("scroll", () => {
    const arrowDown = document.getElementsByClassName("fa-arrow-down");

    for (let i = 0; i < arrowDown.length; i++) {
      arrowDown[i].classList.add("d-none");
    }
  });

  return (
    <div
      className="position-absolute bottom-0 end-0
     mb-4 px-4"
    >
      <a href="#about" aria-label="Arrown Down">
        <FontAwesomeIcon
          icon={["fas", "arrow-down"]}
          className="text-white fa-2x"
        />
      </a>
    </div>
  );
}
