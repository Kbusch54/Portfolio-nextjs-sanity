import React from "react";
import { motion } from "framer-motion";
import { Project as ProjectType } from "../typings";
import Project from "./Project";

type Props = {
  projects: ProjectType[];
};

function Projects({ projects }: Props) {
  // const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 md:pt-32 "
    >
      <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="flex relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-amber-400 scrollbar-track-current mt-10">
        {projects?.map((project, i) => (
          <Project
            project={project}
            key={project._id}
            index={i}
            length={projects.length}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px]  left-0 -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
