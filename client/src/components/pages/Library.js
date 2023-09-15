import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Indica from './Indica';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Weed from '../images/weed.jpg';
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
                const initialEntries = res.data.map((entry) => {
                    const likes = initialLikes[entry._id] || entry.likes || 0;
                    return {
                        ...entry,
                        likes: likes,
                    };
                });

                // Sort the entries array by name in alphabetical order
                const sortedEntries = initialEntries.sort((a, b) => a.name.localeCompare(b.name));

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
                <Element><Indica /></Element>
                <div className='libShell'>
                    {entries.map((entry, index) => {
                        return (
                            <div className='libBox' key={index}>
                                <h1>{entry.name}</h1>
                                <h4 >Strain:<br />{entry.strain}</h4>
                                <p >Taste:<br />{entry.taste}</p>
                                <br />
                                <Link className='btn' to={`/oneEntry/${entry._id}`}>
                                    Details
                                </Link>
                                <br />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DisplayAllEntries;
