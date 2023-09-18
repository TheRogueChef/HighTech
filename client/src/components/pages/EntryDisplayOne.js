import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


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
                                <br />
                                {entry.distributor}
                            </p>
                          
                            <p >Strain:
                                <br />
                                {entry.strain}
                            </p>
                         
                            <p >What form:
                                <br />
                                {entry.shape}
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
                                    <span className='percentage-label'>{entry.totalTerpines}%</span>
                                </div>
                            </div>
                        </div>
                        <div className='viewTaste'>
                            <p >Taste:
                                <br />
                                {entry.taste}
                            </p>
                            <p>Tell us more:
                                <br />
                            {entry.description}
                            </p>

                            

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