import React from "react";
import projectObj from "../info/projectsInfo";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCards = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center md:justify-evenly xl:justify-start xl:gap-10 xl:w-4/5 2xl:w-3/5">
      {projectObj.map((cards) => (
        <div
          className="projCards w-11/12  mb-8 rounded-lg overflow-hidden p-2 md:w-2/5 "
          key={cards.no}
        >
          <div className="w-full flex items-center justify-between">
            <img
              src={cards.projImg}
              alt=""
              className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
            />
            <div className="w-1/3 flex items-center justify-end gap-4 lg:mr-4">
              <FaGithub size={25} />
              {cards.projLink && <FaExternalLinkAlt size={25} />}
            </div>
          </div>
          <h3 className="w-full text-left text-2xl font-medium mt-5 lg:text-3xl">
            {cards.projName}
          </h3>
          <p className="text-xs mt-3 mb-4 text-gray-400 lg:text-sm">
            {cards.projDetails}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {cards.tags.map((tags, index) => (
              <div
                key={index}
                className="text-[9px] px-1 text-green-500 border-[1px] border-gray-500 rounded-3xl lg:text-[11px] 2xl:text-[15px]"
              >
                {tags}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
