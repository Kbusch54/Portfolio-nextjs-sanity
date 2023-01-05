import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="solana"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
              alt={tech.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingThere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc  space-y-4 ml-5 text-lg overflow-scroll">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;