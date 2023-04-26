import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Experiance from "../components/Experiance";
import Transition from "../components/Transition";
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
      console.log(latest.toFixed(0));
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Layout>
        <Transition />
        <Bio />
        <Skills />
        <Experiance />
      </Layout>
    </>
  );
};

export default About;
