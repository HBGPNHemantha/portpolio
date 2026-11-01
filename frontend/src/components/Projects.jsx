import '../App.css';
function Projects() {
  const projectsData = [
    {
        title: "Smart PDF Summarizer",
        category: "AI & Python Tool",
        description: "A smart text extraction and summarization script built with Python and Gemini API to efficiently parse and digest long PDF documents, providing concise summaries for quick understanding.",
        techStack: ["Python", "Gemini API", "pypdf", "NLP"],
        status: "completed",
        github: "https://github.com/HBGPNHemantha/pdf_summerizer.git",
        liveDemo: null
    },
    {
        title: "Expense Tracker Application",
        category: "Full-Stack Web App",
        description: "A responsive web application to track personal expenses, manage spending categories, and visualize dynamic financial data.",
        techStack: ["React", "Node.js", "MongoDB", "Express.js","REST APIs"],
        status: "completed",
        github: "https://github.com/HBGPNHemantha/Expense_Tracker.git",
        liveDemo: null
    },

    {
      title: "Student Performance Prediction",
      category: "Machine Learning",
      description:
        "A predictive machine learning model that analyzes student academic metrics to evaluate and forecast potential performance outcomes.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Data Science"],
      status: "Completed",
      github: "https://github.com/HBGPNHemantha/student--performance_predicter.git",
      liveDemo: null

    },
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      description:
        "A clean, modern, dark-themed responsive portfolio showcasing academic credentials, projects, and technical skills in Full-Stack and AI.",
      techStack: ["React.js", "Vite", "CSS3", "Responsive Design"],
      status: "Completed",
      github: "https://github.com/HBGPNHemantha/portpolio.git",
      liveDemo: null
    },
    {
      title: "WebsiteScout (Lead Generation)",
      category: "Full-Stack Web App",
      description:
        "A full-stack MERN application that identifies local businesses without web presences using the Google Places API and manages sales leads.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Places API"],
      status: "Completed",
      github: "https://github.com/HBGPNHemantha/WebsiteScout.git",
      liveDemo: null
    },

  ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="section-title">
                    Featured <span className="highlight">Projects</span>
                </h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                <span className="project-status">{project.status}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.techStack.map((tech, i) => (
                                    <span className="tech-tag" key={i}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-btn github-btn"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                                {project.liveDemo ? (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-btn demo-btn"
                                    >
                                        Live Demo
                                    </a>
                                ) : (
                                    <span className="demo-placeholder">Deployment Coming Soon</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;