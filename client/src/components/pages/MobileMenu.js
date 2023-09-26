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
                    <Link to="library" smooth={true} duration={500}>
                        Library
                    </Link>
                    <br /><br />
                    <Link to="shops" smooth={true} duration={500}>
                        Shops
                    </Link>
                    <br /><br />
                    <Link to="reviews" smooth={true} duration={500}>
                        Reviews
                    </Link>
                    <br /><br />
                    <Link to="events" smooth={true} duration={500}>
                        Events
                    </Link>
                    <br /><br />
                    <Link to="stories" smooth={true} duration={500}>
                        Stories
                    </Link>
                    <br /><br />
                    <Link to="docs" smooth={true} duration={500}>
                        Docs
                    </Link>
                    <br /><br />
                    <Link to="extra" smooth={true} duration={500}>
                        Extra
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;