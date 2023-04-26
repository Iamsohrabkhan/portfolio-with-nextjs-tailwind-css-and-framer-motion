import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <>

    <AnimatePresence mode="wait">
      <Navbar key={133} />
      <Router>
        <Routes>
          <Route key={'1'} path="/" element={<Home />} />
          <Route key={'12'} path="/about" element={<About />} />
          <Route key={'13'} path="/portfolio" element={<Portfolio />} />
          <Route key={'14'} path="/blogs" element={<Blogs />} />
          <Route key={'15'} path="/blogs/:singleblog" element={<SingleBlog />} />
          <Route key={'16'} path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer key={42343} />
    </AnimatePresence>
    </>
  );
}
