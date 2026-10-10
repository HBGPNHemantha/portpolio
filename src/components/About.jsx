import "../App.css";
function About(){
    return(
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About <span className="highlight">Me</span></h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I’m a Computer Science undergraduate at the University of Vavuniya, Sri Lanka, with a strong interest in Full-Stack Development, Data Science, and Artificial Intelligence. 
                        </p>
                        <p>
                            I enjoy solving problems through programming, exploring data-driven solutions, and building practical applications. Through my projects, I’m developing my skills in web development and machine learning while exploring AI research, including EEG-based motor imagery for hands-free gaming.
                        </p>
                        <p>
                            I’m always eager to learn new technologies, strengthen my technical knowledge, and turn ideas into meaningful solutions.
                        </p>
                        <div className="about-highlits">
                            <div className="highlight-box">
                                <h3>Degree</h3>
                                <p>BSc (Hons) in Computer Science</p>
                            </div>
                            <div className="highlight-box">
                                <h3>University</h3>
                                <p>University of Vavuniya, Sri Lanka</p>
                            </div>
                            <div className="highlight-box">
                                <h3>Focus</h3>
                                <p>Full-Stack Development, Data Science, Artificial Intelligence</p>
                            </div>
        
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;