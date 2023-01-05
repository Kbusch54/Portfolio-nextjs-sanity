import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.length != 0 &&
          socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        {/* <SocialIcon
          url="https://www.youtube.com/sonnnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/sonnnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/sonnnysangha"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-00 cursor-pointer"
      >
        <Link href="#contactMe">
          <div>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor={"gray"}
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A]">
              Get in Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
