import "../App.css";

function Research() {
  const researchData = [
    {
      title: "Cross-Subject Motor Imagery (MI) Classification for Hands-Free Game Control",
      role: "Undergraduate Research Project",
      supervisors: "Supervised by Dr. S. Kirushanth & Prof. S. R. Liyanage",
      description:
        "Developing an advanced BCI framework to decode EEG signals using SE-EEGNet architectures, overcoming cross-subject variability via Unsupervised Domain Adaptation (Maximum Mean Discrepancy - MMD), and integrating real-time inference via a UDP bridge to Unity 3D.",
      techStack: ["PyTorch", "SE-EEGNet", "MMD Domain Adaptation", "MNE-Python", "Unity 3D", "EEG Signal Processing"],
      status: "Research Proposal & Implementation"
    }
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h2 className="section-title">
          Academic <span className="highlight">Research</span>
        </h2>
        
        <div className="research-grid">
          {researchData.map((item, index) => (
            <div className="research-card" key={index}>
              <div className="research-header">
                <span className="research-role">{item.role}</span>
                <span className="research-status">{item.status}</span>
              </div>

              <h3 className="research-title">{item.title}</h3>
              <p className="research-supervisors">{item.supervisors}</p>
              <p className="research-description">{item.description}</p>

              <div className="research-tech">
                {item.techStack.map((tech, i) => (
                  <span className="tech-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
