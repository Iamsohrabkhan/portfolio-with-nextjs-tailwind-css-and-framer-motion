import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-start ">
      <motion.h2
        className={`inline-block w-full font-bold text-primary text-xl sm:text-2xl xl:text-3xl  2xl:text-5xl ${className}`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={item}
              key={index + word}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h2>
    </div>
  );
};
const Pargraph = ({ text, className = "" }) => {
  return (
    <p className={`text-sm text-gray-500 lg:text-base ${className}`}>{text}</p>
  );
};

export default AnimatedText;
export { Pargraph };
