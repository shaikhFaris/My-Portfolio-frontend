import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className="p-3 xl:ml-28 xl:mt-32 my-12 xl:p-0 ">
      <h3
        className="text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold"
        id="experience-section"
      >
        COOL STUFF
      </h3>
      <h1 className="white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10">
        My <span className="text-purple-400 ">Projects.</span>
      </h1>
      <p className="text-[12px] text-gray-500 mb-12 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12">
        Some cool projects I have built using my skills.
      </p>
      <ProjectCards />
    </div>
  );
}

export default Projects;
