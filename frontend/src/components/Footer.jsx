import "../App.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              Pasindu<span className="highlight">.dev</span>
            </a>
            <p className="footer-tagline">
              CS Undergraduate | BCI & AI Researcher | Full-Stack Developer
            </p>
          </div>

          <ul className="footer-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://github.com/HBGPNHemantha"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pasindu-netumina-495a1b449/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} H.B.G.P.N. Hemantha (Pasindu Netumina). All rights reserved.</p>
          <p className="built-with">Designed & Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;