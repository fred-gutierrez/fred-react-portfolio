import skillsData from "../../data/skillsData";
import SkillsItem from "./SkillsItem";
import { nanoid } from "nanoid";

export function Skills() {
  return (
    <div className="col-12 col-md-6 col-lg-6 text-white">
      <h2 className="skills-text fw-bold text-center">Skills</h2>
      <div className="row mt-5">
        {skillsData.map((props) => (
          <SkillsItem
            key={nanoid()}
            img={props.img}
            skillName={props.skillName}
            svg={props.svg}
            yearLearned={props.yearLearned}
          />
        ))}
      </div>
    </div>
  );
}
