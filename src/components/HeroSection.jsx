import { motion } from "framer-motion";
import AnimatedText, { Pargraph } from "../components/AnimatedText";

import React from 'react'
import Logo from "./Logo";

const HeroSection = () => {
  return (
<>
<div className="flex justify-around items-center">
          <motion.div
            className="w-1/2"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: 10,
              y: 10,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <img src="./media/Hero.png" alt="hero" className="w-48 h-48  sm:w-64 sm:h-64 md:w-80 md:h-80" />
          </motion.div>

          <motion.div className="mt-20 w-1/2"
           initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: -10,
            y: -10,
          }}
          transition={{
            duration: 0.5,
          }}
          >
            <AnimatedText text="Turning Vision Into Reality With Code And Design."
            />

            <Pargraph
              text="As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development."
            ></Pargraph>
            <div className="mt-2 flex gap-2 items-center">
              <a
                href=""
                target="_blank"
                className=" flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-black px-3 py-1  text-base font-semibold text-white transition-all hover:bg-black/80 "
              >
                <>
               <p className="text-sm lg:text-base">  Resume </p>
                </>
              </a>
              <a
                href=""
                target="_blank"
                className=" flex cursor-pointer underline font-semibold hover:font-bold"
              >
               <p> Say Hello </p>
              

              </a>
            </div>
          </motion.div>
        </div>
        <Logo/>
</>
  )
}

export default HeroSection