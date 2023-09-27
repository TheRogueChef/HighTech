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
            <div className='libCenter'>
            <p className='libName'>The Library</p>
            </div>
            <div className='btnBar'>
                <Link className='revBtn' to={'/dash'}>Home</Link>
                <Link className='revBtn' to={`/newEntry`}>New Entry</Link>
            </div>
            <br />
    
            
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
                                            <p className='boxName'>{entry.name}</p>
                                            <p>Strain:<br /><p className='boxWords'>{entry.strain}</p></p>
                                            <p>Taste:<br /><p className='boxWords' >{entry.taste}</p></p>
                                            <br />
                                            <Link className='libBtn' to={`/oneEntry/${entry._id}`}>
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
    );

};

export default DisplayAllEntries;
