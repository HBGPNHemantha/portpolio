import "../App.css";
function Skills() {
    const skillCategories=[
        {
            title: "Core CS & Software Engineering",
            skills: [
                "Data Structures",
                "Software Engineering",
                "Compiler Design",
                "Knowledge-Based Systems",
                "Object-Oriented Programming (OOP)",
                "C / C++",
                "Java",
                "Assembly (8086)"
            ]
        },
        {
            title: "AI, Data Science & Mathematics",
            skills: [
                "Python",
                "PyTorch",
                "Machine Learning",
                "Deep Learning",
                "Linear Algebra & Matrices",
                "Graph Theory",
                "Mathematics & Statistics",
                "Numerical Computing",
                "MATLAB",
                "EEG Signal Processing"
            ]
        },
        {
            title: "Full-Stack & Systems",
            skills: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Parallel Computing",
                "OpenMP & MPI",
                "Computer Networks",
                "Cryptography",
                "Computer Graphics"
            ]
        },
        {
            title: "AI Tools & Workflow",
            skills: [
                "Gemini",
                "Claude",
                "Perplexity",
                "Git & GitHub",
                "REST APIs",
                "SQL / SQLite",
                "VS Code",
                "DOSBox / TASM"
            ]
        }
    ];
    return(
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="section-title">
                    My <span className="highlight">Skills</span>
                </h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{category.title}</h3>
                        <div className="skill-chips">
                            {category.skills.map((skill, i) => (
                                <span className="skill-chip" key={i}>
                                    {skill}
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
export default Skills;  