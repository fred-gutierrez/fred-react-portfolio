import { useState } from "react";
import { nanoid } from "nanoid";
import SkillsItem from "./SkillsItem";
import programmingSkillsData from "../../data/programmingSkillsData";
import designSkillsData from "../../data/designSkillsData";
import otherSkillsData from "../../data/otherSkillsData";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [showSkills, setShowSkills] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e);
    setShowSkills(true);
  };

  return (
    <div className="col-12 col-md-6 col-lg-6 text-white">
      <h2 className="skills-text fw-bold text-center">Skills</h2>
      <div
        className="d-flex justify-content-center align-items-center pe-1 fw-light"
        id="skills-selector-container"
      >
        <div
          className={`p-2 px-3 ${
            selectedCategory === "programming"
              ? "skill-selector-active"
              : "text-muted skill-selector-inactive"
          }`}
        >
          <label onClick={() => handleCategoryChange("programming")}>
            Programming
          </label>
        </div>
        <div
          className={`p-2 px-3 ${
            selectedCategory === "design"
              ? "skill-selector-active"
              : "text-muted skill-selector-inactive"
          }`}
        >
          <label onClick={() => handleCategoryChange("design")}>Design</label>
        </div>
        <div
          className={`p-2 px-3 ${
            selectedCategory === "other"
              ? "skill-selector-active"
              : "text-muted skill-selector-inactive"
          }`}
        >
          <label onClick={() => handleCategoryChange("other")}>
            Other/Tools
          </label>
        </div>
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
          : selectedCategory === "programming"
          ? programmingSkillsData.map((props) => (
              <SkillsItem
                key={nanoid()}
                img={props.img}
                skillName={props.skillName}
                svg={props.svg}
                yearLearned={props.yearLearned}
              />
            ))
          : selectedCategory === "other" &&
            otherSkillsData.map((props) => (
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
