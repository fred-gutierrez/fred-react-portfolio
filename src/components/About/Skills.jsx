import { useState } from "react";
import { nanoid } from "nanoid";
import SkillsItem from "./SkillsItem";
import frontEndSkillsData from "../../data/frontEndSkillsData";
import backendSkillsData from "../../data/backendSkillsData";
import otherSkillsData from "../../data/otherSkillsData";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [showSkills, setShowSkills] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e);
    setShowSkills(true);
  };

  return (
    <div className="col-12 col-md-6 col-lg-6 text-white">
      <h2 className="skills-text fw-bold text-center">Skills</h2>
      <div
        className="d-flex justify-content-center align-items-center ps-3 fw-light"
        id="skills-selector-container"
      >
        <div
          className={`p-2 px-3 ${
            selectedCategory === "frontend"
              ? "skill-selector-active"
              : "text-muted skill-selector-inactive"
          }`}
        >
          <label onClick={() => handleCategoryChange("frontend")}>
            Front-End
          </label>
        </div>
        <div
          className={`p-2 px-3 ${
            selectedCategory === "backend"
              ? "skill-selector-active"
              : "text-muted skill-selector-inactive"
          }`}
        >
          <label onClick={() => handleCategoryChange("backend")}>
            Back-End
          </label>
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
        {showSkills && selectedCategory === "backend"
          ? backendSkillsData
              .sort((a, b) => b.yearLearned - a.yearLearned)
              .map((props) => (
                <SkillsItem
                  key={nanoid()}
                  img={props.img}
                  skillName={props.skillName}
                  svg={props.svg}
                  yearLearned={props.yearLearned}
                />
              ))
          : selectedCategory === "frontend"
          ? frontEndSkillsData
              .sort((a, b) => b.yearLearned - a.yearLearned)
              .map((props) => (
                <SkillsItem
                  key={nanoid()}
                  img={props.img}
                  skillName={props.skillName}
                  svg={props.svg}
                  yearLearned={props.yearLearned}
                />
              ))
          : selectedCategory === "other" &&
            otherSkillsData
              .sort((a, b) => b.yearLearned - a.yearLearned)
              .map((props) => (
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
