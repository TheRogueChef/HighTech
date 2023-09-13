import React from 'react';
import { Link } from 'react-scroll';
import '../pages/style.css';
import MobileMenu from './MobileMenu';
import { Image } from 'react-bootstrap';
import DigiLeaf from '../images/JustLeaf.png';





const Dashboard = () => {
    return (
        <div className='dashShell' >
            <MobileMenu />
            <div>
                <div className='dashLogo'>
                    <Image className='leaf' src={DigiLeaf} alt='...'/>
                    <p>HighTech</p>
                </div>
            </div>
            <br /><br />
            <div className='dashMenu'>
                <br /><br />
                <Link to='library' smooth={true} duration={500} >Library</Link>
                <br /><br />
                <Link  to='shops' smooth={true} duration={500}>Shops</Link>
                <br /><br />
                <Link to='reviews' smooth={true} duration={500}>Reviews</Link>
                <br /><br />
                <Link to='events' smooth={true} duration={500}>Events</Link>
                <br /><br />
                <Link to='docs' smooth={true} duration={500}>Docs</Link>
                <br /><br />
                <Link to='extra' smooth={true} duration={500}>Extra</Link>
                <br /><br /><br />
            </div>
        </div >
    )
}

export default Dashboard;