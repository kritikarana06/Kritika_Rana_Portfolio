// src/components/Certifications.jsx
import "./Certifications.css";
import coursera from "../assets/Cousera.png";
import pwc from "../assets/pwcdata.png";
import aws1 from "../assets/aws1.png";
import aws2 from "../assets/aws2.png";
import awscli from "../assets/awscli.png";
import nptel from "../assets/nptel.png";
import cisco from "../assets/cisco.png";
import hackerrank from "../assets/Hackerrank.png";
import udemy from "../assets/udemy.png";
import flipkart from "../assets/flipkart.png";
import adobe from "../assets/adobe.png";
import pepsi from "../assets/pepsi.png";
export default function Certifications() {
  return (
   
    <section className="certifications-section" id="certifications">
      
      <h2 className="certifications-heading">My Certifications</h2>

      <div className="cert-grid">
        <a className="cert-card" href="https://www.coursera.org/account/accomplishments/certificate/TSRPSHADGKNL" target="_blank" rel="noopener noreferrer">
          <img src={coursera} alt="Google AI Essentials - Coursera" />
          <div className="cert-info">
            <span className="issuer">Coursera</span>
            <span className="date">April 26, 2025</span>
            <h3>Google AI Essentials</h3>
          </div>
        </a>

        <a className="cert-card" href="https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=36928" target="_blank" rel="noopener noreferrer">
          <img src={pwc} alt="PWC Launchpad - Data Engineering" />
          <div className="cert-info">
            <span className="issuer">PWC</span>
            <span className="date">June 18, 2025</span>
            <h3>PWC Launchpad - Data Engineering</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/1jnwYLkxcX4CdVhzyfTGPWtkT_Uhe-mrb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={flipkart} alt="Flipkart Grid 7.0 Semi-Finalist 2025" />
          <div className="cert-info">
            <span className="issuer">Flipkart</span>
            <span className="date">Aug 15, 2025</span>
            <h3>Flipkart Grid 7.0 Semi-Finalist 2025</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/19Gy-5Gn84BRHzAWIIrkhi-tOqvfvCnMh/view?usp=sharing">
          <img src={adobe} alt="Flipkart Grid 7.0 Semi-Finalist 2025" />
          <div className="cert-info">
            <span className="issuer">Adobe</span>
            <span className="date">Oct 18, 2025</span>
            <h3>Adobe India Hackathon</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/1ifp0_y_YuOId5V41_Yfqjf8YE4SI-q3J/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={aws1} alt="AWS Cloud Practitioner Essentials" />
          <div className="cert-info">
            <span className="issuer">Amazon Web Services (AWS)</span>
            <span className="date">March 9, 2025</span>
            <h3>AWS Cloud Practitioner Essentials</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/1KFVKpppE5GcIv4S7TgM76LHey0yzBdcr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={aws2} alt="Deep Dive With Security - AWS" />
          <div className="cert-info">
            <span className="issuer">Amazon Web Services (AWS)</span>
            <span className="date">Feb 22, 2025</span>
            <h3>Deep Dive With Security</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/1XCcTpOqYJfkgnwiCdstlVUdA2C-SE4sG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={awscli} alt="AWS CLI Basics" />
          <div className="cert-info">
            <span className="issuer">Amazon Web Services (AWS)</span>
            <span className="date">Feb 22, 2025</span>
            <h3>AWS CLI Basics</h3>
          </div>
        </a>

        <a className="cert-card" href="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/109/noc24-hs176/Course/NPTEL24HS176S55030027404102554.pdf" target="_blank" rel="noopener noreferrer">
          <img src={nptel} alt="NPTEL - Soft Skills" />
          <div className="cert-info">
            <span className="issuer">NPTEL SWAYAM</span>
            <span className="date">August 20, 2024</span>
            <h3>Developing Soft Skills and Personality</h3>
          </div>
        </a>

        <a className="cert-card" href="https://www.credly.com/badges/9e1d7398-e1af-4f9c-b6ea-31b842329a3e/public_url" target="_blank" rel="noopener noreferrer">
          <img src={cisco} alt="Cisco - Cybersecurity Essentials" />
          <div className="cert-info">
            <span className="issuer">CISCO</span>
            <span className="date">May 19, 2023</span>
            <h3>Cybersecurity Essentials</h3>
          </div>
        </a>

        <a className="cert-card" href="https://www.udemy.com/certificate/UC-80591673-fa2e-44cc-a8c6-986f8df0a3b1/" target="_blank" rel="noopener noreferrer">
          <img src={udemy} alt="Udemy - Web Development Bootcamp" />
          <div className="cert-info">
            <span className="issuer">Udemy</span>
            <span className="date">May 10, 2023</span>
            <h3>The Complete 2023 Web Development Bootcamp</h3>
          </div>
        </a>
        <a className="cert-card" href="https://www.hackerrank.com/certificates/iframe/8096a74d0a81" target="_blank" rel="noopener noreferrer">
          <img src={hackerrank} alt="HackerRank - Problem Solving" />
          <div className="cert-info">
            <span className="issuer">HackerRank</span>
            <span className="date">Sept 3, 2023</span>
            <h3>Problem Solving (Basic)</h3>
          </div>
        </a>

        <a className="cert-card" href="https://drive.google.com/file/d/1zKlhJtDGq2Qw3y81BhnH6D_TWBjVByaW/view?usp=sharing">
          <img src={pepsi} alt="Flipkart Grid 7.0 Semi-Finalist 2025" />
          <div className="cert-info">
            <span className="issuer">PepsiCo</span>
            <span className="date">Oct 18, 2023</span>
            <h3>PepSheCO Sales Star</h3>
          </div>
        </a>
      </div>
     
    </section>
     
  );
}
