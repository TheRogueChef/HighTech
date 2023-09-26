import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../pages/style.css';

const OneEvent = (props) => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneEvent/" + id)
            .then((res) => {
                if (isMounted) {
                setEvent(res.data);
            }
            })
            .catch((err) => {
                console.log(err);
            });
        return ()=> {
            isMounted = false;
        };
    }, [id]);




    return (
        <div className='viewDad'>
            <br  /><br  />
            <p className='viewName'>{event.eventTitle}</p>
            <br  /><br  />
        <div className='btnBar'>
            <Link className='btn' to={`/updateEvent/${event._id}`}>Edit</Link>
            <br /><br />
            <Link className='btn' to={`/dash`}>Home</Link>
            <br />
            <Link className='btn' to={`/events`}>All Events</Link>
        </div>
            <div className='viewShell'>
                <br />
                <p className= 'viewEntry'>{event.eventTitle}</p>
                <br />
                <h3> {event.eventLocation}</h3>
                <br />
                <h3> {event.eventDate}</h3>
                <br  />
                <h2 style={{ fontStyle: 'italic'}}>"{event.eventDetails}"</h2>
                <br /><br />
            </div>
        </div>
    )
}

export default OneEvent;