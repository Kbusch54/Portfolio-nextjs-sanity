import React, { useState } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { SocialIcon } from "react-social-icons";

type Props = {
  project: Project;
  index: number;
  length: number;
};

function Project({ project, index, length }: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleTechToggle = (e: React.MouseEvent) => {
    setTechToggle(!techToggle);
    console.log(e, e.stopPropagation);
    if (e && e.stopPropagation) e.stopPropagation();
  };
  const [techToggle, setTechToggle] = useState(true);
  return (
    <div
      key={project._id}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
    >
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <div
          className=" flex flex-col bg-black  items-center justify-center"
          onClick={handleFlip}
        >
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={urlFor(project?.image).url()}
            alt={`${project?.title} "image"`}
            className="w-64"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              {project?.title}
            </h4>
          </div>
        </div>

        <div
          onClick={handleFlip}
          className="flex flex-col cardBackground sm:max-h-[15rem] md:max-h-[23.5rem] max-w-xl items-start justify-center space-y-4 space-x-4"
        >
          <h3 className="text-xl ml-4  font-semibold decoration-slice tracking-[8px]">
            Description
          </h3>
          <p className="text-sm md:text-lg md:text-left max-h-56  overflow-y-scroll scrollbar-thumb-blue-700 scrollbar scrollbar-track-green-400/20 space-x-4 ">
            {project?.summary}
          </p>

          <h3 className="text-xl font-semibold decoration- tracking-[8px]">
            Technology
          </h3>
          <div
            onClick={(e) => handleTechToggle(e)}
            className={`grid grid-cols-5 md:grid-cols-6 gap-2 md:gap-4 ml-6 pb-2 ${
              techToggle
                ? " md:ml-24 mt-12 md:pb-4"
                : "mt-10 md:pb-4 pr-4 md:pr-2 md:space-x-2 justify-items-center "
            }`}
          >
            {project?.technologies?.map((tech) => (
              <div key={tech?._id} className="hover:opacity-80 ">
                {techToggle ? (
                  <>
                    <p className=" absolute md:mt-6  md:ml-2 opacity-0 md:hover:opacity-100 ">
                      {tech.title}
                    </p>
                    <img
                      className="w-8 h-8 md:w-16 md:h-16  border rounded-full  "
                      src={urlFor(tech.image).url()}
                    />
                  </>
                ) : (
                  <div className="sm:text-sm md:text-base">{tech?.title}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ReactCardFlip>
      <h4 className="text-4xl font-semibold text-center">
        <span className="underline decoration-[#F7AB0A]/50">
          {index + 1} 0f {length}
        </span>{" "}
      </h4>
      <div className="flex-row justify-between md:gap-x-10 lg:gap-x-[50rem] space-y-2 text-[#F7AB0A] hidden md:flex">
        <div className="site-container md:mt-2">
          <h1 className="font-bold tracking-[10px]">GitHub</h1>
          <SocialIcon url={project?.linkToBuild} />
        </div>
        <div className="site-container">
          <h1 className="font-bold tracking-[10px] ">Live Site</h1>
          <SocialIcon url={project?.linkToSite} />
        </div>
      </div>
      <div className="flex flex-row gap-x-24 md:hidden text-left">
        <div>
          <SocialIcon
            url={project?.linkToBuild}
            style={{ height: 40, width: 40 }}
          />
          <p>GitHub</p>
        </div>
        <div className="">
          <SocialIcon
            url={project?.linkToSite}
            style={{ height: 40, width: 40 }}
          />
          <p className="">LiveSite</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
