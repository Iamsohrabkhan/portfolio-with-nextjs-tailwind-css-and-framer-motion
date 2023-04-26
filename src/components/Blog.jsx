import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col space-y-12 divide-y divide-gray-200">
      {data.map((curr, i) => {
        const { paragraph, title, date, slug } = curr;
        return (
          <motion.div
            key={i}
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <p className="mb-3 pt-12 text-sm font-normal text-gray-500">
              {date}
            </p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
              <Link
                to={`${slug}`}
                className="text-gray-900 hover:text-purple-700"
              >
                {title}
              </Link>
            </h2>
            <p className="mb-4 text-base font-normal text-gray-600">
              {paragraph}
            </p>
            <Link to={`${slug}`} className="btn btn-light btn-sm">
              Continue Reading
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};
export default Blog;
