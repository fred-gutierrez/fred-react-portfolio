import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function OfferingsItem(props) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 offerings-animation">
      <div className="d-flex justify-content-center">
        <div className="circle1">
          <FontAwesomeIcon
            icon={["fas", props.icon]}
            className="mt-3"
            size="2x"
          />
        </div>
      </div>
      <h3 className="fw-bold text-center text-white mt-1">{props.title}</h3>
      <p className="text-center text-white mb-5 aboutTextParagraph">
        {props.description}
      </p>
    </div>
  );
}
