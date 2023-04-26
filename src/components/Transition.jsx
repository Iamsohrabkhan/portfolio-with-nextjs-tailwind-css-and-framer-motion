import { motion as m } from "framer-motion";
const Transition = () => {
  return (
    <>
      <m.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-primary"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        exit={{
          x: ["0%", "100%"],
          width: ["0%", "100%"],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <m.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-white"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        // exit={{
        //   x: ["0%", "100%"],
        //   width: ["0%", "100%"],
        // }}
        transition={{ duration: 0.8, ease: "easeIn",delay:0.2 }}
      />

      <m.div
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-black"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        // exit={{
        //   x: ["0%", "100%"],
        //   width: ["0%", "100%"],
        // }}
        transition={{ duration: 0.8, ease: "easeInOut",delay:0.4 }}
      />
    </>
  );
};

export default Transition;
