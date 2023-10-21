import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
