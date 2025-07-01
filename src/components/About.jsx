import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Typewriter Name Intro */}
      <h2 className="typewriter">
        About Me<span className="cursor">|</span>
      </h2>

      {/* Stylish Headline */}
      <h3 className="headline">
        CSE Undergrad &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp; Competitive Programmer
      </h3>

      {/* Bio */}
      <div className="bio">
        <p>
          I’m a final-year B.Tech CSE student at Graphic Era Hill University, deeply passionate about solving real-world problems through code.
        </p>
        <p>
          With strong DSA fundamentals and experience across full-stack development, Android, and competitive programming, I love building impactful tech .
        </p>
      </div>

      {/* Academics */}
      <h4 className="academics-heading">Academic Details</h4>
      <div className="table-wrapper">
        <table className="academics-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Examination</th>
              <th>Institution</th>
              <th>Marks / CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022 – 2026</td>
              <td>B.Tech CSE</td>
              <td>Graphic Era Hill University, Dehradun</td>
              <td>9.04 / 10</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Class XII</td>
              <td>Grace Academy School, Dehradun</td>
              <td>92.00 %</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>Class X</td>
              <td>Grace Academy School, Dehradun</td>
              <td>95.80 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* --- Certifications Button --- */}
<div className="cert-btn-wrapper">
  <a href="#certifications" className="cert-button">
    View Certifications
  </a>
</div>

    </section>
  );
}
