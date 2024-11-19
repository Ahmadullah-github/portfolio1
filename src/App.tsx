import './App.css'; 
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div>
      <Navbar /> 
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;
