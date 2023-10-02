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
        <div className='newDocShell'>
            <div className='docBox'>
                {docs.map((doc, index) => (
                    <div className='allDocs' key={doc}>
                        <p className='allDocTitle'>{doc.docTitle}</p>
                        <a className= 'allDocLink' href={doc.docDetails} target="_blank" rel="noopener noreferrer">  
                            {doc.docDetails}
                        </a>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default DisplayAllDocs;