import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <>
    <Transition/>
    <main className="mb-16 flex w-full flex-col items-center justify-center">
      <Layout className="pt-6">
        <div className="my-6">
          <AnimatedText text={"Recent Work"} className="mb-5 text-center" />

          <div className="grid grid-cols-1 gap-12">
            <Project
              type="Blog site"
              title="Self Love"
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nemo magnam quasi recusandae provident fugiat dicta. Commodi provident nulla dolorum natus recusandae sequi?"
              img="./media/project1.png"
              link="google.com"
              github="github.com"
            />
            <Project
              type="Mini Portofolio"
              title="Developer Portfolio"
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nemo magnam quasi recusandae provident fugiat dicta. Commodi provident nulla dolorum natus recusandae sequi?"
              img="./media/project2.png"
              link="google.com"
              github="github.com"
            />

            <Project
              type="Eccomerce"
              title="Technology Shop"
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nemo magnam quasi recusandae provident fugiat dicta. Commodi provident nulla dolorum natus recusandae sequi?"
              img="./media/project3.png"
              link="google.com"
              github="github.com"
            />
          </div>
        </div>
      </Layout>
    </main>
    </>
  );
};

export default Portfolio;
