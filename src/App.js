import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Hero from "./components/hero/Hero.component";
import About from "./components/about/About.component";
import Projects from "./components/projects/Projects.component";
import { BrowserRouter as Router } from "react-router-dom";
import ContactForm from "./components/contact/ContactForm.component";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}

export default App;
