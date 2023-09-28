import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import ScrollToTopButton from '../pages/ScrollToTopButton';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


const DisplayAllDocs = (props) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allDocs')
            .then((res) => {
                const initialDocs = res.data.map((doc) => {
                    return {
                        ...doc,
                        docDate: formatDate(doc.docDate),
                    
                    };
                });
                setDocs(initialDocs.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className= 'evShell'>
            <br />
            <div className='libCenter'>
            <p className='evTitle'>All Docs</p>
            </div>
            <div className='btnBar'>
                <Link className='bubBtn' to={'/dash'}>Home</Link>
            </div> 
            <br />
            <div className='evBox'>
            {docs.map((doc, index) => (
                <div className='evBubble' key={doc}>
                    <p className='bubTitle'>{doc.docTitle}</p>
                    <p className='bubLocation'>{doc.docLocation}</p>
                    <p className='bubLocation'>{doc.docDate}</p>
                    <br /><br />
                </div>
            ))}
            </div> 
            <ScrollToTopButton />
        </div>
    );
};

export default DisplayAllDocs;