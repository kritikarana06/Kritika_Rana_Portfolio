import "./Projects.css";

export default function Projects() {
  return (
    
      <div className="projects-container" id="projects">
        <h2 className="projects-heading">Projects</h2>

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
              Detects leaf diseases using Convolutional Neural Networks with an interactive Streamlit dashboard.
            </p>
            <p className="tech">Python · TensorFlow · Streamlit</p>
          </a>

          {/* 2. Disk Scheduling Visualizer */}
          <a
            className="project-cards"
            href="https://github.com/kritikarana06/PBL_OS_KRITIKA_RANA_A1_GEHU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>📀 Disk Scheduling Visualizer</h3>
            <p>
              Simulates disk scheduling algorithms like FCFS, SCAN, C-SCAN, LOOK & C-LOOK interactively.
            </p>
            <p className="tech">HTML · CSS · JavaScript · C++</p>
          </a>

          {/* 3. Snake Game */}
          <a
            className="project-card"
            href="https://github.com/kritikarana06/Snake-Game-Using-JAVA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>🐍 Snake Game (Java Swing)</h3>
            <p>
              Classic arcade-style Snake game with increasing speed, score tracking and neat UI.
            </p>
            <p className="tech">Java · Swing</p>
          </a>

          {/* 4. Source-to-Source Compiler */}
          <a
            className="project-cards"
            href="https://github.com/kritikarana06/PBL_COMPILER_SOURCE_TO_SOURCE_CONVERTER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>🔄 C → Python Source-to-Source Compiler</h3>
            <p>
              Translates C programs into equivalent Python using AST parsing and a Flask-based interface.
            </p>
            <p className="tech">C++ · Bison · Flex · Flask · Python</p>
          </a>

        </div>
      </div>
  );
}
