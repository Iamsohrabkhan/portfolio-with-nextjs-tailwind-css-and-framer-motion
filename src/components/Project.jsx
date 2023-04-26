import { motion as m } from "framer-motion";
import { Pargraph } from "./AnimatedText";
import { GithubIcon } from "./icons";

export default function Project({ type, title, summary, img, link, github }) {
  return (
    <m.article className="flex flex-col md:flex-row w-full items-center justify-between rounded-3xl border-[1px] border-solid  border-black bg-white  md:px-6 py-5 shadow-2xl">
      <span className="w-96 sm:w-[30rem] lg:w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <m.img
          src={img}
          alt=""
          className="h-auto w-full "
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.1,
            },
          }}
        />
      </span>

      <div className="lg:w-1/2 w-96 sm:w-[30rem] flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium text-primary mt-2">{type}</span>
        <a
          href=""
          target="_blank"
          className="underline-offset-2 hover:underline  "
        >
          <h2 className="my-1 md:my-2 w-full text-left text-3xl lg:text-4xl font-bold ">{title}</h2>
        </a>
        <Pargraph text={summary}></Pargraph>
        <div className="mt-3 flex items-center justify-start gap-2">
          <a href={github} className="inline">
            <GithubIcon className="h-7 w-7 " />
          </a>
          <a
            href={link}
            className="flex cursor-pointer items-center  justify-center gap-1 rounded-lg bg-black px-4 py-1 text-sm font-semibold text-white underline-offset-2 shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:underline"
          >
            Visit Project
          </a>
        </div>
      </div>
    </m.article>
  );
}
