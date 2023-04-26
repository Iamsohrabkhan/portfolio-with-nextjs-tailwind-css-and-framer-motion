import React from "react";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";
import { Link } from "react-router-dom";
const CustomLink = ({ href, title, className = "" }) => {
  return (
    <>
      <a href={href} className={`${className} group relative mx-2`}>
        {title}
        <span className="absolute -bottom-0 left-0 inline-block h-[1px] w-0 bg-black  transition-[width] duration-300 ease-linear group-hover:w-full">
          {" "}
          &nbsp;
        </span>
      </a>
    </>
  );
};
export const Logo = () => {
  return (
    <motion.a
      href="/"
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full
   bg-black text-sm font-bold text-white"
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(253,29,29,1)",
          "rgba(252,176,269,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        transition: {
          duration: 1,
          repeat: Infinity,
        },
      }}
    >
      Sk
    </motion.a>
  );
};

export const Icons = () => {
  return (
    <>
      <motion.a
        href="/"
        target="_blank"
        className="text-2xl"
        whileHover={{
          scale: 1.3,
          y:-5,
          transition: {
            // duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        href=""
        target="_blank"
        className="text-2xl"
        whileHover={{
          scale: 1.3,
          y:-5,
          transition: {
            // duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <DribbbleIcon />
      </motion.a>
      <motion.a
        href=""
        target="_blank"
        className="text-2xl"
        whileHover={{
          scale: 1.3,
          y:-5,
          transition: {
            // duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <PinterestIcon />
      </motion.a>
      <motion.a
        href=""
        target="_blank"
        className="text-2xl"
        whileHover={{
          scale: 1.3,
          y:-5,
          transition: {
            // duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href=""
        target="_blank"
        className="text-2xl"
        whileHover={{
          scale: 1.3,
          y:-5,
          transition: {
            // duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <LinkedInIcon />
      </motion.a>
    </>
  );
};

const Navbar = () => {
  return (
    <header className="container mx-auto flex max-w-[90%] items-center justify-between py-2">
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/portfolio" title="Portfolio" />
        <CustomLink href="/blogs" title="Blogs" />
      </nav>

      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <nav className="flex items-center justify-center gap-5">
        <Icons />
      </nav>
    </header>
  );
};

export default Navbar;
