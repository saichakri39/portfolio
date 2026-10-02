import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Internship from "./components/Internship.jsx";
import LearningJourney from "./components/LearningJourney.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
