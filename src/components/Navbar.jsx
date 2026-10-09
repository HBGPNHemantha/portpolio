import {useState, useEffect} from "react";
import "../App.css";
function Navbar(){
    const[darkMode, setDarkMode] = useState(true);
    
    // Apply the theme based on the darkMode state
    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return(
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo / Name */}
                <div className="navbar-logo">
                    <a href="#home">PASINDU NETUMINA<span>.</span></a>
                </div>

                {/* Navigation links */}
                <div className="navbar-menu">
                    <a className="navbar-link" href="#home">Home</a>
                    <a className="navbar-link" href="#about">About</a>
                    <a className="navbar-link" href="#skills">Skills</a>
                    <a className="navbar-link" href="#projects">Projects</a>
                    <a className="navbar-link" href="#research">Research</a>
                    <a className="navbar-link" href="#contact">Contact</a>
                </div>
                {/*dark/light toggle btn*/}
                <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    {darkMode ? '☀️ Light': '🌙 Dark'}
                </button>
            </div>
        </nav>
    );
}
export default Navbar;