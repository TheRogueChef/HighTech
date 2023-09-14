import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import DigiLeaf from '../images/JustLeaf.png';

function AgeVerification() {
  const [isOldEnough, setIsOldEnough] = useState(null);
  const navigate = useNavigate();

  const handleVerification = (e, oldEnough) => {
    e.preventDefault();

    if (oldEnough) {
      navigate('/dash');
    } else {
      alert('You are under 21. Access denied!');
    }
  };

  return (
    <div className='ageShell'>
      
      <h1 className='ageTitle'>Age Verification</h1>
      <div className='ageBox'>
        <form onSubmit={(e) => handleVerification(e, isOldEnough)}>
        <Image className='ageLeaf' src={DigiLeaf} alt='...' />
        <h1>Welcome!</h1>
          <h2>Are you of legal smoking age?</h2>
          <div className='ageButtonBox'>
            <button className='ageBtn' onClick={() => setIsOldEnough(true)}>Yes</button>
            <button className='ageBtn' onClick={() => setIsOldEnough(false)}>No</button>
          </div>
        </form>
        <br />
        <h4 style={{ textShadow: '.05rem .05rem ghostwhite'}}>
          By entering this website, you certify that you are of legal smoking age in the state in which you reside.
        </h4>
      </div>
    </div>
  );
}

export default AgeVerification;



