import "./Experience.css";
import smartLogo from "../assets/smart.jpg";
import smartCert from "../assets/cert1.png";
import pwLogo from "../assets/pw.jpg";
import pwCert from "../assets/cert2.png";

export default function Experience() {
  const experiences = [
    {
      logo: smartLogo,
      title: "Salesforce Developer",
      role: "Internship - TheSmartBridge",
      duration: "May 2025 - Jul 2025 · 2 mos",
      description:
        "Worked as a Salesforce Developer intern with a focus on building and customizing Salesforce solutions.",
      cert: smartCert,
    },
    {
      logo: pwLogo,
      title: "Data Analytics Launchpad Trainee",
      role: "PwC India · Trainee",
      duration: "Feb 2025 - Jul 2025 · 6 mos",
      description:
        "Launchpad program included modules like IT fundamentals, RDBMS, Python, and data engineering.",
      cert: pwCert,
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="flipper">
              {/* Front side */}
              <div className="front card-border">
                <img src={exp.logo} alt={exp.title} className="experience-logo" />
                <div className="experience-info">
                  <h3>{exp.title}</h3>
                  <span className="role">{exp.role}</span>
                  <span className="duration">{exp.duration}</span>
                  <p className="description">{exp.description}</p>
                </div>
              </div>

              {/* Back side */}
              <div className="back card-border">
                <img src={exp.cert} alt={`${exp.title} Certificate`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
