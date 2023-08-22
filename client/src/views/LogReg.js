import React from 'react';
import Register from '../components/users/Register';
import Login from '../components/users/Login';




const LogReg = (props) => {

    return (
        <div>
    
        <div className='LRBoxes'>
            <br />
            <Login />
            <br />
            <Register />
            <br />
        </div>
        
        </div>
    )
}
export default LogReg;