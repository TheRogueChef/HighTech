import React from 'react';
import '../components/pages/style.css';
import { Image } from 'react-bootstrap';
import DigiLeaf from '../components/images/JustLeaf.png';
import { Link as RouterLink } from 'react-router-dom';



const Main = (props) => {

    return (
        <div className='Main'>
            <div className='mainLeft'>High
            </div>
            <div className='mainLeft2'>Tech
            </div>
            <div className='mainRight'>
            <Image className='leaf' src={DigiLeaf} alt='...' />
            </div>
            <div >
            <RouterLink className='mainRight2' to='/logReg'>enter</RouterLink>
            </div>
        </div>
    );
};

export default Main;
