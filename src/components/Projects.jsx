import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <div className="project-list">

        {/* 1. Plant Disease Detection */}
        <a
          className="project-card"
          href="https://github.com/kritikarana06/Plant-disease-detection-using-CNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>🌿 Plant Disease Detection (CNN)</h3>
          <p>
            Identifies leaf diseases with a Convolutional Neural Network and a
            Streamlit dashboard.
          </p>
          <p className="tech">Python · TensorFlow · Streamlit</p>
        </a>

        {/* 2. Dynamic Disk Scheduling Visualizer */}
        <a
          className="project-card"
          href="https://github.com/kritikarana06/PBL_OS_KRITIKA_RANA_A1_GEHU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>📀 Disk Scheduling Visualizer</h3>
          <p>
            Interactive simulator for FCFS, SCAN, C-SCAN, LOOK & C-LOOK algorithms.
          </p>
          <p className="tech">HTML · CSS · JavaScript · C++</p>
        </a>

        {/* 3. Snake Game (Java Swing) */}
        <a
          className="project-card"
          href="https://github.com/kritikarana06/Snake-Game-Using-JAVA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>🐍 Snake Game</h3>
          <p>
            Classic Snake game built with Java Swing featuring score tracking and
            increasing difficulty.
          </p>
          <p className="tech">Java · Swing</p>
        </a>

        {/* 4. Source-to-Source Compiler */}
        <a
          className="project-card"
          href="https://github.com/kritikarana06/PBL_COMPILER_SOURCE_TO_SOURCE_CONVERTER"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>🔄 C&nbsp;→&nbsp;Python Source-to-Source Compiler</h3>
          <p>
            Converts C programs to equivalent Python by generating an AST and
            emitting Python code via Flask UI.
          </p>
          <p className="tech">
            C++ · Bison · Flex · Flask · Python
          </p>
        </a>

      </div>
    </section>
  );
}
