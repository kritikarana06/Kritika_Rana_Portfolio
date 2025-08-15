import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from "./components/Experience";


import './App.css';
function App() {
  return (
     <div className="app-container">
      <Navbar />
      <Home />
      <About /><br /><br />
      <Skills /><br /><br />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}
export default App;
