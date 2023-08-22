import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';
import MobileMenu from './MobileMenu';


const Dashboard = () => {
    return (
        <div className='dashShell' >
            <MobileMenu />
            <div>
                <div className='dashLeft'>
                    <p>Erik</p>
                    <p style={{ marginTop: '-8%'}}>Carlson</p>
                </div>
                <div className= 'dashLeft2'>
                    <p>~ Ex Chef gone rogue in the world of UI and UX!! ~</p>
                </div>
            </div>
            <br /><br />
            <div className='dashRight'>
                <br /><br />
                <Link to='about' smooth={true} duration={500} >About Me</Link>
                <br /><br />
                <Link  to='projects' smooth={true} duration={500}>Projects</Link>
                <br /><br />
                <Link to='techSkills' smooth={true} duration={500}>Tech Skills</Link>
                <br /><br />
                <Link to='education' smooth={true} duration={500}>Education</Link>
                <br /><br />
                <Link to='experience' smooth={true} duration={500}>Experience</Link>
                <br /><br />
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
                <br /><br /><br />
            </div>
        </div >
    )
}

export default Dashboard;