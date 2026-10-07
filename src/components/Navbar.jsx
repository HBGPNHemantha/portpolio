import "../App.css";
function Navbar(){
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
            </div>
        </nav>
    );
}
export default Navbar;