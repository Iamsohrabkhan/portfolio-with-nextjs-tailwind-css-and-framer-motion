import React from "react";
import { CircularText } from "./icons";

const Logo = () => {
  return (
    <div className="my-24">
      <div className="fixed bottom-4 left-4 z-[9] flex items-center justify-center overflow-hidden">
        <div className="relative flex h-auto w-24  items-center  justify-center sm:w-48">
          <CircularText className="animate-spin-slow fill-black" />
        </div>
        <div className="absolute left-1/2 right-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2  -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black text-sm ">
          Hire Me
        </div>
      </div>
    </div>
  );
};

export default Logo;
