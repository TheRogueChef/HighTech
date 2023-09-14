import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        <div className=''>
            <br />
            <p className= ''>The Library</p>
            <br />
            <div className= ''>
                <Link className='' target='blank' to={'/dash'}>Home</Link>
                <Link className='' to={`/newEntry`}>New Entry</Link>
            </div>
            <br /><br />
            {entries.map((entry, index) => {
                

          
                return (
                    <div className='' key={index}>
                        <h1>{entry.entryName}</h1>
                        <h4 >
                            {entry.entryDistributor}
                        </h4>
                        <h4 >
                            {entry.entryStrain}
                        </h4>
                        <h4 >
                            {entry.entryShape}
                        </h4>
                        <h4 >
                            {entry.entryTotalTHC}
                        </h4>
                        <h4 >
                            {entry.entryTotalCBD}
                        </h4>
                        <h4 >
                            {entry.entryTotalTerpines}
                        </h4>
                        <h4 >
                            {entry.entryTaste}
                        </h4>
                        <h2 style={{ fontStyle: 'italic' }}>"{entry.entryDescription}"</h2>
                        <br /><br />
                        <Link className='' to={`/oneEntry/${entry._id}`}>
                            Deets
                        </Link>
                        <br /><br />
                        <div className=''>
                            <div className=''>
                            Likes: {entry.likes}
                            </div>
                            <br />
                            <button className='' onClick={() => handleLike(entry._id, index)}>
                                You Like That?
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DisplayAllEntries;