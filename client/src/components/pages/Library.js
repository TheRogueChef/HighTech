import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import ScrollToTopButton from '../pages/ScrollToTopButton';

import { Link } from 'react-router-dom';

import '../pages/style.css';

const DisplayAllEntries = (props) => {
    const [entries, setEntries] = useState([]);
    const initialLikes = {};

    const handleLike = (entryId, entryIndex) => {
        axios
            .post(`http://localhost:8000/api/likeEntry`, { entryId })
            .then(() => {
                setEntries((prevEntries) => {
                    const updatedEntries = [...prevEntries];
                    const updatedEntry = { ...updatedEntries[entryIndex] };
                    updatedEntry.likes += 1;
                    updatedEntries[entryIndex] = updatedEntry;
                    return updatedEntries;
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEntries')
            .then((res) => {
                const desiredStrainOrder = ['Hybrid', 'Sativa', 'Indica', 'Edible', 'Other'];
                const filteredEntries = res.data.filter((entry) =>
                    desiredStrainOrder.includes(entry.strain)
                );
                const sortedEntries = filteredEntries.sort((a, b) =>
                    desiredStrainOrder.indexOf(a.strain) - desiredStrainOrder.indexOf(b.strain)
                );
                setEntries(sortedEntries);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className='libDad'>
            <br />
            <p className='libName'>The Library</p>
            <div className='btnBar'>
                <Link className='btn' to={'/dash'}>Home</Link>
                <Link className='btn' to={`/newEntry`}>New Entry</Link>
            </div>
            <br />
            <div className=''>
                <br />

                <div className='libShell'>
                    {['Hybrid', 'Sativa', 'Indica', 'Edible', 'Other'].map((strainType) => (
                        <div key={strainType}>
                            <div>
                                <h2 className='Ifiller'>{strainType}</h2>
                            </div>
                    
                            <div className='innerBox'>
                                {entries
                                    .filter((entry) => entry.strain === strainType)
                                    .map((entry, index) => (
                                        <div className='libBox' key={index}>
                                            <h1>{entry.name}</h1>
                                            <h4>Strain:<br />{entry.strain}</h4>
                                            <p>Taste:<br />{entry.taste}</p>
                                            <br />
                                            <Link className='btn' to={`/oneEntry/${entry._id}`}>
                                                Details
                                            </Link>
                                            <br />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
                <ScrollToTopButton />
            </div>
        </div>
    );

};

export default DisplayAllEntries;
