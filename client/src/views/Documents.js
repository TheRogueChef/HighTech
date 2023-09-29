import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewDoc from '../components/pages/NewDoc';
import DisplayAllDocs from '../components/pages/Docs';
import axios from 'axios';
import '../components/pages/style.css';

const Documents = (props) => {
    const [docs, setDocs] = useState([]);

    const updateDocList = (newDoc) => {
        setDocs([...docs, newDoc]);
    };

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allDocs')
            .then((res) => {
                const initialDocs = res.data.map((doc) => {
                    return {
                        ...doc

                    };
                });
                setDocs(initialDocs.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='docShell'>
            <div className='docShellTop'>
                <div>
                    <p className='documentTitle'>Interesting Stuff</p>
                    <Link className='docBtn2' to={'/dash'}>Home</Link>
                </div>
                <NewDoc updateDocList={updateDocList} />
            </div>
            <div className=''>
                <DisplayAllDocs docs={docs} />
            </div>
        </div>
    );
};

export default Documents;
