import "../App.css";
function Hero(){
    return(

        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <span className="hero-badge">Welcome to my portfolio</span>
                    <h1 className="hero-title">Hi, I'm <span className="highlight">Pasindu</span></h1>
                    <h2 className="hero-subtitle">Full-Stack Developer | Aspiring AI/ML Engineer</h2>
                    <p className="hero-description">I'm a Computer Science undergraduate building a strong foundation in Full-Stack Development, Data Science, and Machine Learning. I'm passionate about turning data into intelligent solutions and developing AI-powered applications, with the goal of becoming an AI/ML Engineer.</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/HBGPNHemantha" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/pasindu-netumina-254a06434/" target="_blank" rel="noreferrer">LinkedIn</a>

                    </div>
                </div>
                <div className="hero-image-container">
                    <img
                        src="../../public/images/propic.jpg"
                        alt="Profile picture"
                        className="hero-image"
                    />

                </div>
            </div>

        </section>
    );
}
export default Hero;
