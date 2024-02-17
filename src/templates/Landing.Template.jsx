import SocialMedia from "src/components/social-media-icons/SocialMedia.component";
import HeroScene from "src/components/Organisms/3D-hero-section/HeroScene";
import About from "src/components/Organisms/about/About.component";
import ContactForm from "src/components/Organisms/contact/ContactForm.component";
import Navbar from "src/components/Organisms/navbar/Navbar.component";
import Projects from "src/components/Organisms/projects/Projects.component";

export default function LandingTemplate() {
  return (
    <>
      <Navbar />
      <HeroScene />
      <About />
      <Projects />
      <ContactForm />
      <SocialMedia />
    </>
  );
}
