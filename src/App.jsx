import Navbar from "./components/navbar/Navbar.component";
// import Hero from "./components/hero/Hero.component";
import About from "./components/about/About.component";
import Projects from "./components/projects/Projects.component";
import ContactForm from "./components/contact/ContactForm.component";
import SocialMedia from "./components/social-media-icons/SocialMedia.component";
import { BrowserRouter } from "react-router-dom";
import HeroScene from "./components/3D-hero-section/HeroScene";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Hero /> */}
      <HeroScene />
      <About />
      <Projects />
      <ContactForm />
      <SocialMedia />
    </BrowserRouter>
  );
}

export default App;
