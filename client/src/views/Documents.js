import React from 'react';
import NewDoc from '../components/pages/NewDoc';
import DisplayAllDocs from '../components/pages/Docs';




const Documents = (props) => {

    return (
        <div>
    
        <div className='LRBoxes'>
            <br />
            <NewDoc />
            <br />
            <DisplayAllDocs />
            <br />
        </div>
        
        </div>
    )
}
export default Documents;