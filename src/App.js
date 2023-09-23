import "./css/App.css";
import logo from "./assets/little-lemon-logo.png";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <header id="header">
        <img src={logo} alt="logo" />
        <Nav />
      </header>
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
