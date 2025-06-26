import "./Home.css";

export default function Home() {
  return (
    <section className="home-section" id="home">
      <p className="intro-line">This is me</p>
      <h1 className="main-name">Kritika Rana</h1>
      <p className="about-line">
        Final year B.Tech CSE student & passionate software developer.
      </p>
      <a
        href="https://drive.google.com/file/d/1Rx8iI_7TIWUfWTw19yc9zja2iCpIswVu/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>
    </section>
  );
}
