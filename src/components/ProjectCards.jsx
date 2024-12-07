import React from "react";
import projectObj from "../info/projectsInfo";

const ProjectCards = () => {
  return (
    <div className=" flex flex-col items-center">
      {projectObj.map((cards) => (
        <div
          className="projCards w-11/12 h-72  mb-5 rounded-2xl"
          key={cards.no}
        >
          <div className="w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
