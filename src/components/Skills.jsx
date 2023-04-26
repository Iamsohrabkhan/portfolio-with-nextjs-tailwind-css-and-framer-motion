import { motion } from "framer-motion";
import React from "react";

export const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-black px-4 py-2 font-semibold text-white shadow-sm shadow-black duration-300 hover:scale-110 text-sm"
      initial={{
        x: 5,
        y: 0,
      }}
      whileInView={{
        x: x,
        y: y,
      }}
      transition={{
        duration: 1.5,
        type:"spring",
        bounce: 1, 
      }}
      whileHover={{
        background: "#f5f5f5",
        color: "#1b1b1b",
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="bg-white">
      <h2 className="w-full text-center text-6xl font-bold text-primary">Skills</h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight ">
        <Skill name={"Web"} x={0} y={0} />
        <Skill name={"HTML"} x={"-29vw"} y={"2vw"} />
        <Skill name={"Css"} x={"-5vw"} y={"-10vw"} />
        <Skill name={"TailwindCss"} x={"20vw"} y={"6vw"} />
        <Skill name={"Javascript"} x={"0vw"} y={"-13.5vw"} />
        <Skill name={"NextJs"} x={"28vw"} y={"-5vw"} />
        <Skill name={"React"} x={"-15vw"} y={"-7vw"} />
        
        <Skill name={"Nodejs"} x={"-25vw"} y={"8vw"} />
        <Skill name={"Strapi"} x={"0vw"} y={"13.5vw"} />
      </div>
    </div>
  );
};

export default Skills;
