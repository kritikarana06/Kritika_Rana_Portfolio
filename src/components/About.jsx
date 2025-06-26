import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* --- Dynamic Typewriter Heading --- */}
      <h2 className="typewriter">
        Hi, my name is Kritika<span className="cursor">|</span>
      </h2>

      {/* --- Bio Paragraphs --- */}
      <p>
        I’m a B.Tech Computer Science student who loves turning ideas into real-life
        software projects. From CNN-based plant-disease detection to compiler
        design, I enjoy exploring the full stack and solving problems that matter.
      </p>
      <p>
        When I’m not coding, you’ll find me sharpening my DSA skills on LeetCode or
        digging into system-level topics like disk scheduling and OS security.
      </p>

      {/* --- Academic Details Table --- */}
      <h3 className="academics-heading">Academic Details</h3>
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
              <td>Sep&nbsp;2022 – Aug 2026</td>
              <td>B.Tech&nbsp;CSE</td>
              <td>Graphic Era Hill University, Dehradun</td>
              <td><strong>9.04 / 10</strong></td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Class XII</td>
              <td>Grace Academy School, Dehradun</td>
              <td><strong>92.00 %</strong></td>
            </tr>
            <tr>
              <td>2020</td>
              <td>Class X</td>
              <td>Grace Academy School, Dehradun</td>
              <td><strong>95.80 %</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
