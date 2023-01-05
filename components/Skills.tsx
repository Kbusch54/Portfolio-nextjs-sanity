import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as Tech } from "../typings";

type Props = {
  skills: Tech[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="flex h-screen relative flex-col  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auot items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute tracking-[3px] text-gray-500 text-sm top-36">
        Hover over skill for proficency
      </h3>
      <div className="grid grid-cols-4 gap-5 md:pt-8 lg:pt-16">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
