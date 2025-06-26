import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Kritika Rana</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Talk To Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
