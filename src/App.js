import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Hero from "./components/hero/Hero.component";
import About from "./components/about/About.component";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
