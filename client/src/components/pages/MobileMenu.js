import React, { useState } from 'react';
import { Link } from 'react-scroll';


const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mobile-menu">
            <br />
            <div className="menu-toggle" onClick={toggleMenu}>
                Menu  
                
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <br />
            {menuOpen && (
                <div className="menu-items">
                    <Link to="about" smooth={true} duration={500}>
                        About Me
                    </Link>
                    <br /><br />
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                    <br /><br />
                    <Link to="techSkills" smooth={true} duration={500}>
                        Tech Skills
                    </Link>
                    <br /><br />
                    <Link to="education" smooth={true} duration={500}>
                        Education
                    </Link>
                    <br /><br />
                    <Link to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                    <br /><br />
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;