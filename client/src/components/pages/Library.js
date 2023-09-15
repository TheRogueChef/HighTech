import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
                setEntries(initialEntries.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='libDad'>
            <br />
            <p className='libName'>The Library</p>
            <div className=''>
                <Link className='' to={'/dash'}>Home</Link>
                <Link className='' to={`/newEntry`}>New Entry</Link>
            </div>
            <div className='libOuterShell'>
                    <Image className='libPic' src={Weed} alt='...' />
                <div className='libShell'>
                    {entries.map((entry, index) => {
                        return (
                            <div className='libOuterBox' key={index}>
                                <h1>{entry.name}</h1>
                                <h2 style={{ fontStyle: 'italic' }}>
                                    "{entry.description}"</h2>
                                <div className='libBox'>
                                    <div className='libEntry'>
                                        <h3 >Grown or distributed by:
                                            <br />
                                            {entry.distributor}
                                        </h3>
                                        <h4 >Strain:
                                            <br />
                                            {entry.strain}
                                        </h4>
                                        <h4 >What form (flower, dab, live resin, edible, etc...):
                                            <br />
                                            {entry.shape}
                                        </h4>
                                    </div>
                                    <div className='graph'>
                                        <p className='GTitle'>Weed Stats</p>
                                        <div className=''>
                                            <div className='bar'>
                                                <span>THC%</span>
                                                <div className='bar-fill' style={{ marginLeft: '5%', width: `${entry.totalTHC}%` }}></div>
                                                <span className='percentage-label'>{entry.totalTHC}%</span>
                                            </div>
                                            <div className='bar'>
                                                <span>CBD%</span>
                                                <div className='bar-fill' style={{ marginLeft: '5%', marginBottom: '5%', width: `${entry.totalCBD}%` }}></div>
                                                <span className='percentage-label'>{entry.totalCBD}%</span>
                                            </div>
                                            <div className='bar'>
                                                <span>Terpenes%</span>
                                                <div className='bar-fill' style={{marginLeft: '5%', width: `${entry.totalTerpenes}%` }}></div>
                                                <span className='percentage-label'>{entry.totalTerpines}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='libTaste'>
                                        <p >Taste:
                                            <br />
                                            {entry.taste}
                                        </p>
                                        <br /><br />
                                        <Link className='' to={`/oneEntry/${entry._id}`}>
                                            Details
                                        </Link>
                                        <br /><br />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DisplayAllEntries;