import React from "react";

export default function OfferingsItem(props) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      <div className="d-flex justify-content-center">
        <div className="circle1">{props.icon}</div>
      </div>
      <h3 className="fw-bold text-center text-white mt-1">{props.title}</h3>
      <p className="text-center text-white mb-5 aboutTextParagraph">
        {props.description}
      </p>
    </div>
  );
}
