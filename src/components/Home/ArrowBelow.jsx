import { useEffect } from "react";

export function ArrowBelow() {
  window.addEventListener("scroll", function () {
    const arrowDown = document.getElementsByClassName("fa-arrow-down");

    for (let i = 0; i < arrowDown.length; i++) {
      arrowDown[i].classList.remove("fa-arrow-down");
    }
  });

  return (
    <div
      id="arrow-down"
      className="position-absolute heartbeat1 bottom-0 end-0
     mb-4 px-4 arrow-below"
    >
      <a href="#about">
        <i className="fa-solid fa-arrow-down text-white fa-2x"></i>
      </a>
    </div>
  );
}

// Awa