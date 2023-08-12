import { useState } from "react";
import programmingSkillsData from "../../data/programmingSkillsData";
import SkillsItem from "./SkillsItem";
import { nanoid } from "nanoid";
import designSkillsData from "../../data/designSkillsData";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [showSkills, setShowSkills] = useState(false);

  const handleCategoryChange = () => {
    const newCategory =
      selectedCategory === "programming" ? "design" : "programming";
    setSelectedCategory(newCategory);
    setShowSkills(true);
  };

  return (
    <div className="col-12 col-md-6 col-lg-6 text-white">
      <h2 className="skills-text fw-bold text-center">Skills</h2>
      <div className="d-flex justify-content-center align-items-center pe-4 fw-light">
        <label
          className={`pe-2 ${
            selectedCategory === "programming"
              ? "text-black text-decoration-underline"
              : "text-muted"
          }`}
        >
          Programming
        </label>
        <div class="form-check form-switch mt-1">
          <input
            onClick={handleCategoryChange}
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <label
          className={`${
            selectedCategory === "design"
              ? "text-black text-decoration-underline"
              : "text-muted"
          }`}
        >
          Design
        </label>
      </div>
      <div className="row mt-5">
        {showSkills && selectedCategory === "design"
          ? designSkillsData.map((props) => (
              <SkillsItem
                key={nanoid()}
                img={props.img}
                skillName={props.skillName}
                svg={props.svg}
                yearLearned={props.yearLearned}
              />
            ))
          : programmingSkillsData.map((props) => (
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
