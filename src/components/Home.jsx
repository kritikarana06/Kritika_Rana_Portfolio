import { useState, useEffect } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profilePic from "../assets/uu.png";
export default function Home() {
  const roles = [
    "CSE Undergrad",
    "Web Developer",
    "Competitive Programmer",
    "Problem Solver",
    "Avid Reader",
    "Tech enthusiast",
    "Efficient coder",
    "Logical thinker",
    "Music lover"
  ];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section className="home-section" id="home">
      <p className="intro-line">This is me</p>
  <h1 className="main-name">Kritika Rana 👋 </h1>
      <br />
 <p className="tagline">
          &lt; {text}
          <span className="cursor">|</span> /&gt;
        </p> <br />
      <div className="tagline-container">
        <div className="profile-pic">
         <img
  src={profilePic}
  alt="Kritika Rana"
/>
        </div>
      </div>

      <p className="about-line">
        Passionate problem-solver with strong DSA fundamentals, eager to build impactful
        tech solutions and tackle real-world challenges.
      </p>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/kritika-rana-917a27231/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/kritikarana06" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://leetcode.com/u/kritikarana/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
      </div>

      <a
        href="https://drive.google.com/file/d/1wiqZaC17TZ7TUxvQZ0nlRBshy-_TfT3s/view?usp=sharing"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload className="icon" />
        Download Resume
      </a>
    </section>
  
  );
}
