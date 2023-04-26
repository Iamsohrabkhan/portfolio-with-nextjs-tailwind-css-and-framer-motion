import React, { useEffect, useRef } from "react";
import AnimatedText, { Pargraph } from "../components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
const Number = ({ value }) => {
  const ref = useRef(null);
  const mValue = useMotionValue(0);
  const isInView = useInView(ref);
  const springValue = useSpring(mValue, {
    duration: 3000,
  });
  useEffect(() => {
    if (isInView) {
      mValue.set(value);
    }
  }, [isInView, value, mValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);
  return <span ref={ref}></span>;
};
const Bio = () => {
  return (
    <div className="py-5">
      <AnimatedText text="Passion Fuel Purpose" className="text-center" />
      <div className="my-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-center items-center gap-5">
        <div>
          <Pargraph
            className="mt-2"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cumque reprehenderit explicabo dolor repudiandae placeat magnam quisquam id tempore nam assumenda quasi, recusandae, debitis architecto iure autem, omnis maxime"
          />
          <Pargraph
            className="mt-2"
            text="? Eligendi, ut excepturi deserunt aliquid facilis reprehenderit, veritatis culpa suscipit soluta temporibus ex adipisci quasi quos minima unde numquam incidunt quidem optio eveniet. A possimus doloremque repudiandae eveniet impedit necessitatibus officiis, explicabo vero, pariatur atque numquam."
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="./media/Sohrab.jpg"
            alt=""
            className="object-coverhr h-96 w-64 rounded-md shadow-lg drop-shadow-md filter hover:-hue-rotate-180 "
          />
        </div>
        <div className="flex flex-col justify-center  gap-3 md:col-span-2 lg:col-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold ">
              <Number value={40} />+
            </h2>
            <span className="text-stone-600 ">Satisfied Client</span>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold ">
              <Number value={50} />+
            </h2>
            <span className="text-stone-600 ">Project Completed</span>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold ">
              <Number value={2} />+
            </h2>
            <span className="text-stone-600 ">Years of experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
