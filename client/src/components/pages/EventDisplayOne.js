import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../pages/style.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const OneEvent = (props) => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneEvent/" + id)
            .then((res) => {
                if (isMounted) {
                    res.data.eventDate = formatDate(res.data.eventDate);
                        setEvent(res.data);

                }
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {
            isMounted = false;

        };
    }, [id]);




    return (
        <div className='dispDad'>
            <div className='dispBox'>
            <p className='dispName'>{event.eventTitle}</p>
            <br />
            <div className='dispShell'>
                <p>Location:<br /><p className='dispWords'>{event.eventLocation}</p></p>
                <p className='dispP'>Date:<br /><p className='dispWords'>{event.eventDate}</p></p>
                <p className='dispP2'>Details:<br /><p className='dispWords2'>{event.eventDetails}</p></p>
            </div>
            <br /><br />
            </div>
            <div className='btnBar'>
                <Link className='revBtn' to={`/updateEvent/${event._id}`}>Edit</Link>
                <Link className='revBtn' to={`/dash`}>Home</Link>
                <Link className='revBtn' to={`/events`}>Back</Link>
               
            </div>
            <br /><br />
        </div>
    )
}

export default OneEvent;