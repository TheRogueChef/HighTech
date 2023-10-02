import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import '../pages/style.css';
import DoorDashLogo from '../images/doorDashLogo.png';
import UberEatsLogo from '../images/uberEatsLogo.png';
import UberLogo from '../images/uberLogo.jpg';
import LyftLogo from '../images/lyftLogo.jpg';
import LeaflyLogo from '../images/leaflyLogo.jpg';
import WeedmapLogo from '../images/weedmapLogo.png';



const Extras = () => {

    return (
        <div className='extraShell'>
            <p className='exTitle'>Extras</p>
            <Link className='bubBtn' to={'/dash'}>Home</Link>
            <br />
            <div className='outerBox'>
                <div className='eats'>
                    <p>Hungry?</p>
                    <div className='inner'>
                        <a href={'https://www.doordash.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={DoorDashLogo} alt='...' />
                        </a>
                        <br /><br />
                        <a className='exLinkH' href={'https://www.ubereats.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={UberEatsLogo} alt='...' />
                        </a>
                    </div>
                </div>
                <hr />
                <div className='rides'>
                    <p>Need to go somewhere?</p>
                    <p className='rideLine'>Please catch a ride!</p>
                    <div className='inner'>
                        <a href={'https://www.uber.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={UberLogo} alt='...' />
                        </a>
                        <br /><br />
                        <a href={'https://www.lyft.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={LyftLogo} alt='...' />
                        </a>
                    </div>
                </div>
                <hr />
                <div className='resources'>
                    <p>Need to find more?</p>
                    <div className='inner'>
                        <a href={'https://www.weedmaps.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={WeedmapLogo} alt='...' />
                        </a>
                        <br /><br />
                        <a href={'https://www.leafly.com'} target="_blank" rel="noopener noreferrer">
                            <Image className='eatLogo' src={LeaflyLogo} alt='...' />
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <div className='helpBox'>
                <p>If you or someone you know may have a substance abuse issue, please seek help.</p>
                <div className='inHelpBox'>
                    <p>1-800-662-4357</p>
                    <a className='helpLink' href={'https://www.samhsa.gov'} target="_blank" rel="noopener noreferrer">
                        {'Click here for help resources'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Extras;