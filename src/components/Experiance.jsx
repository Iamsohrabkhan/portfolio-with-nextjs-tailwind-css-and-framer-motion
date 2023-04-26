import { useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
export const Li = ({ position, company, time, address, description }) => {
  const ref = useRef(null);
  return (
    <>
      <li className="mx-auto my-8 flex w-[80%] lg:max-w-[70%] flex-col items-center justify-center first:mt-0 last:mb-0 ">
        <div>
      <LiIcon reference={ref} />
          <h3 className="text-xl md:text-2xl font-bold capitalize text-primary ">
            {position}
          </h3>{" "}
          <a href={address
          }>{company}</a> &nbsp;
          <span className="font-medium capitalize text-black/75  ">
            {time} | {address}
          </span>
          <p className="text-sm text-gray-500 lg:text-base mt-1 w-full ">{description}</p>
        </div>
      </li>
    </>
  );
};

const Experiance = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="my-8 text-center text-6xl font-bold text-primary drop-shadow-2xl">
        Experience
      </h2>
      <div className="relative mx-auto max-w-[100%]">
        <div
          style={{ scaleY: scrollYProgress }}
          
          className="absolute scale-y- left-8 h-full top-0 h- w-[4px] origin-top bg-black"
          ref={ref}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Li
            position="Software Enginear"
            company="Google"
            time="2022-present"
            address="www.google.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at nobis aliquam delectus. Commodi quisquam, in corporis doloremque cum iusto nisi ipsum aspernatur!"
          />
          <Li
            position="Software Enginear"
            company="Google"
            time="2022-present"
            address="www.google.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at nobis aliquam delectus. Commodi quisquam, in corporis doloremque cum iusto nisi ipsum aspernatur!"
          />
          <Li
            position="Software Enginear"
            company="Google"
            time="2022-present"
            address="www.google.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at nobis aliquam delectus. Commodi quisquam, in corporis doloremque cum iusto nisi ipsum aspernatur!"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
