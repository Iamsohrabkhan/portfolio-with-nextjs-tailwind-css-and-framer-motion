import AnimatedText from "../components/AnimatedText";
import React from "react";
import Blog from "../components/Blog";
import Transition from "../components/Transition";

export const data = [
  {
    title: "Process Documents Using Artificial Intelligence For RPA Bots",
    slug: "Process-Documents-Using-Artificial-Intelligence-For-RPA-Bots-1",
    imgSrc:"/media/blogs/1.jpg",
    date: "April 16, 2020",
    paragraph: `"Earlier RPA bots used to have some limitations like it would take
      structured data for processing from excel, database, on these data. But
      with advancements in technology like OCR (Optical Character Recognition)
      and Machine Learning, RPA bots are capable of extracting these data"`,
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    slug: "Process-Documents-Using-Artificial-Intelligence-For-RPA-Bots-2",
    imgSrc:"/media/blogs/3.jpg",
    date: "April 16, 2020",
    paragraph: `"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo temporibus, aperiam ipsum odio molestiae iste veniam excepturi atque saepe voluptatem nemo eligendi."`,
  },
];

const Blogs = () => {
  return (
    <>
    <Transition/>
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:w-3/4 lg:w-2/4">
      <div className="mb-12 text-left md:text-center">
        <AnimatedText
          className="mb-2 text-center text-3xl font-extrabold leading-tight"
          text="Skcript Blog"
          />
        <p className="text-lg text-gray-500">
          Everything comes directly from the desk of the respective engineers,
          creators and managers at Skcript. 
        </p>
      </div>

      <Blog data={data} />
    </section>
          </>
  );
};

export default Blogs;
