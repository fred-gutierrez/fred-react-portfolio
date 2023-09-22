import { nanoid } from "nanoid";
import offeringsData from "../../data/offeringsData";
import OfferingsItem from "./OfferingsItem";

export function Offerings() {
  return (
    <div>
      <h2 className="text-center text-white fw-bold text-uppercase pt-5 mb-5">
        About
      </h2>
      <div id="icon-container" className="container">
        <div className="row mb-5">
          {offeringsData.map((props) => (
            <OfferingsItem
              key={nanoid()}
              icon={props.icon}
              title={props.title}
              description={props.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
