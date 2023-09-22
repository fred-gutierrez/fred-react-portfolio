import React, { useState } from "react";

export default function SkillsItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-6 col-lg-4 skills-animation">
      <div className="d-flex justify-content-center">
        {props.img ? (
          <img height="95px" src={props.img} alt={props.skillName} />
        ) : (
          <>{props.svg}</>
        )}
      </div>
      <p
        className="text-white text-center mt-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.skillName}{" "}
        <span
          className="fst-italic text-muted"
          style={{
            display: isHovered ? "inline" : "none",
          }}
        >
          ~ {props.yearLearned}
        </span>
      </p>
    </div>
  );
}
