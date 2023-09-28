import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


const DisplayAllEvents = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEvents')
            .then((res) => {
                const initialEvents = res.data.map((event) => {
                    return {
                        ...event,
                        eventDate: formatDate(event.eventDate),
                    
                    };
                });
                setEvents(initialEvents.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className= 'evShell'>
            <br />
            <div className='libCenter'>
            <p className='evTitle'>All Events</p>
            </div>
            <div className='btnBar'>
                <Link className='bubBtn' to={'/dash'}>Home</Link>
                <Link className='bubBtn' to={`/newEvent`}>New Event</Link>
            </div> 
            <br />
            <div className='evBox'>
            {events.map((event, index) => (
                <div className='evBubble' key={index}>
                    <p className='bubTitle'>{event.eventTitle}</p>
                    <p className='bubLocation'>{event.eventLocation}</p>
                    <p className='bubLocation'>{event.eventDate}</p>
                    <Link className='bubBtn' to={`/oneEvent/${event._id}`}>Details</Link>
                    <br /><br />
                </div>
            ))}
            </div> 
        </div>
    );
};

export default DisplayAllEvents;