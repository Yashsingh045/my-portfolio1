import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../Projects";
import MyPortfolio from "../Projects";
import MySkills from "../Skills";


export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutMe />
      
      <MyProjects/>

      <MySkills />

      <ContactMe />

      <Footer />
    </>
  );
}