import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Transition from "../components/Transition";
const Home = () => {
  return (
    <>
    <Transition/>
      <Layout>
        <HeroSection />
      </Layout>
    </>
  );
};

export default Home;
