import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';

const DisplayAllEvents = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEvents')
            .then((res) => {
                const initialEvents = res.data.map((event) => {
                    return {
                        ...event
                    
                    };
                });
                setEvents(initialEvents.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className= ''>
            <br  />
            <h1 className=''>All Events</h1>
            <br/>
            <div className='btnBar'>
                <Link className='btn' to={'/dash'}>Home</Link>
                <Link className='btn' to={`/newEvent`}>New Event</Link>
            </div>  
            {events.map((event, index) => (
                <div className='' key={index}>
                    <h1>{event.eventTitle}</h1>
                    <h4>{event.eventLocation}</h4>
                    <h4>{event.eventDate}</h4>
                    <h2 style={{ fontStyle: 'italic'}}>"{event.eventDetails}"</h2>
                    <br />
                    <Link className='btn' to={`/oneEvent/${event._id}`}>Deets</Link>
                    <br /><br />
                </div>
            ))}
        </div>
    );
};

export default DisplayAllEvents;