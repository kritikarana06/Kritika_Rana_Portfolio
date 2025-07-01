import { useState, useEffect } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  // Typewriter logic
  const fullName = "Kritika Rana";
  const [displayName, setDisplayName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      setDisplayName(fullName.slice(0, index + 1));
      setIndex((prev) =>
        prev === fullName.length ? 0 : prev + 1
      );
    }, 200); // typing speed (ms)

    return () => clearInterval(typing);
  }, [index, fullName]);

  return (
    <section className="home-section" id="home">
      <p className="intro-line">This is me</p>

      {/* Typewriter Name */}
      <h1 className="main-name">
        {displayName}
        <span className="cursor">|</span>
      </h1>

      <p className="tagline">
        CSE Undergrad&nbsp;|&nbsp;Web Developer&nbsp;|&nbsp;Competitive Programmer
      </p>
      <p className="about-line">
        Passionate problem‑solver with strong DSA fundamentals, eager to build impactful tech
        solutions and tackle real‑world challenges.
      </p>

      {/* Social Icons */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/kritika-rana-917a27231/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kritikarana06" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/kritikarana/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/uc?export=download&id=1Rx8iI_7TIWUfWTw19yc9zja2iCpIswVu"
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
