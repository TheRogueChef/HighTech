import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../pages/style.css';

const OneEntry = (props) => {

    const { id } = useParams();
    const [entry, setEntry] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneEntry/" + id)
            .then((res) => {
                setEntry(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);



    return (
        <div className='viewDad'>
            <div className='viewShell'>
                <p className='viewName'>{entry.name}</p>
                <br />
                <div className='viewOuterBox' >
                    <div className='viewBox'>
                        <div className='viewEntry'>
                            <p >Grown or distributed by:
                                <p style={{ color: 'greenyellow', marginTop: '-2%'}}>{entry.distributor}</p>
                            </p>
                            <p >Strain:
                                <p style={{ color: 'greenyellow', marginTop: '-2%'}}>{entry.strain}</p>
                            </p>
                            <p >What form:
                                <p style={{ color: 'greenyellow', marginTop: '-2%'}}>{entry.shape}</p>
                            </p>
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
                                    <div className='bar-fill' style={{ marginLeft: '5%', width: `${entry.totalCBD}%` }}></div>
                                    <span className='percentage-label'>{entry.totalCBD}%</span>
                                </div>
                                <div className='bar'>
                                    <span>Terpenes%</span>
                                    <div className='bar-fill' style={{ marginLeft: '5%', width: `${entry.totalTerpenes}%` }}></div>
                                    <span className='percentage-label'>{entry.totalTerpenes}%</span>
                                </div>
                            </div>
                        </div>
                        <div className='viewTaste'>
                            <p >Taste:
                                <p style={{ color: 'greenyellow', marginTop: '-2%'}}>{entry.taste}</p>
                            </p>
                            <p>Tell us more:
                            <p style={{ color: 'greenyellow', marginTop: '-2%'}}>{entry.description}</p>
                            </p>

                            <Link className='revBtn' to={`/updateEntry/${entry._id}`}>
                                                Reviews
                                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='btnBar'>
                <Link className='btn' to={'/dash'}>Home</Link>
                <Link className='btn' to={`/library`}>Back</Link>
            </div>
        </div>
    )
}

export default OneEntry;