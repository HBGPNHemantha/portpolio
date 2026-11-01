import "../App.css";

function Experience() {
  const experiences = [
    {
      role: "Undergraduate AI/BCI Researcher",
      organization: "University of Vavuniya",
      period: "2026 - Present",
      description: [
        "Conducting research on Motor Imagery (MI) EEG signal decoding using SE-EEGNet and PyTorch.",
        "Applying Unsupervised Domain Adaptation (MMD) to address cross-subject variability in BCI systems.",
        "Developing real-time inference pipelines connecting deep learning models to Unity 3D via UDP."
      ]
    },
    {
      role: "Full-Stack & ML Developer",
      organization: "Independent / Personal Projects",
      period: "2025 - Present",
      description: [
        "Architected and deployed MERN stack applications like WebsiteScout utilizing Google Places API.",
        "Developed Python-based Machine Learning models and automation scripts including PDF Summarizer.",
        "Integrated modern workflow and AI tools (Gemini, Claude) for high-efficiency code debugging."
      ]
    },
    {
      role: "Academic Student Representative",
      organization: "Faculty of Applied Science, University of Vavuniya",
      period: "2 years",
      description: [
        "Represented student body in academic discussions, liaisoning between students and department faculty.",
        "Facilitated issue resolution regarding course modules, schedules, and academic activities.",
        "Demonstrated strong communication, organizational, and leadership skills across the academic batch."
      ]
    },
    {
      role: "University Rugby Player",
      organization: "University of Vavuniya Rugby Team",
      period: "Active Member",
      description: [
        "Represented the university rugby team in competitive matches, playing key tactical positions.",
        "Fostered strong team collaboration, discipline, dynamic decision-making, and physical endurance."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">
          Experience & <span className="highlight">Leadership</span>
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-org">{exp.organization}</h4>
                <ul className="experience-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;