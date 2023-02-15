import React from "react";

export default function SkillsItem(props) {
  return (
    <div className="col-6 col-lg-4">
      <div className="d-flex justify-content-center">
        {props.img ? (
          <img height="95px" src={props.img} alt={props.skillName} />
        ) : (
          <>{props.svg}</>
        )}
      </div>
      <p className="text-white text-center mt-2">{props.skillName}</p>
    </div>
  );
}
