import React from "react";
import "../App.css";

function Certificates() {
  // Methana oyage image path ekai, actual credential link ekai dekama danna puluwan
  const certificatesList = [
    {
      id: 1,
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2023",
      description: "Acquired hands-on experience in distributed version control, branching strategies, and collaborative software development workflows.",
      image: "/images/python_b.jpg",      // Certificate image eka public folder eke thiyena path eka
      credentialLink: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1" // Actual verify link ekata hari Drive link ekata
    },
    {
      id: 2,
      title: "Git, GitHub & GitLab Fundamentals",
      issuer: "Version Control Open Learning",
      date: "2026",
      description: "Completed comprehensive training on advanced Python programming concepts, data structures, and algorithms.",
      image: "/images/gitcertificate.jpg",
      credentialLink: "https://www.udemy.com/certificate/UC-7b470af4-d67e-4269-95a0-c3962df86ccb/"
    },
    {
      id: 3,
      title: "Python Programming Mastery",
      issuer: "University of Moratuwa",
      date: "2026",
      description: "Learned core programming logic, syntax, problem-solving techniques, and script automation using Python.",
      image: "/images/python_pro.jpg",
      credentialLink: "https://www.udemy.com/certificate/UC-536d80d7-1113-4b16-893d-56e6e8b43f36/"
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        
        {/* Section Heading */}
        <h2 className="section-title">
          My <span className="highlight">Certifications</span>
        </h2>
        <p className="certificates-subtitle">
          Professional training, certifications, and specialized courses I have completed.
        </p>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesList.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-icon-wrapper">
                <span className="cert-badge-icon">📜</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>
              <p className="cert-description">{cert.description}</p>

              {/* Action Buttons Container */}
              <div className="cert-actions">
                {/* View Image Button */}
                {cert.image && (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-btn"
                  >
                    View Image 🖼️
                  </a>
                )}

                {/* View Actual Verify/Credential Link Button */}
                {cert.credentialLink && cert.credentialLink !== "#" && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-btn verify-btn"
                  >
                    Verify Link ➔
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;