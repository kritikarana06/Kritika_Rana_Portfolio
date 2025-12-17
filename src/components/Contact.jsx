import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">📬 Talk To Me</h2>

      <div className="contact-card">
        <p><FaEnvelope className="icon" /> <strong>Email:</strong> <a href="mailto:kritikarana006@gmail.com">kritikarana006@gmail.com</a></p>
        <p><FaPhone className="icon" /> <strong>Phone:</strong> <a href="tel:+918126463554">+91 8126463554</a></p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/kritikarana06" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/kritikarana06" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="https://leetcode.com/u/kritikarana/" target="_blank" rel="noreferrer">
            <FaCode className="icon" /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
