import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import ScrollToTopButton from '../pages/ScrollToTopButton';

function formatDate(dateString) {
    try {
        return new Date(dateString);
    } catch (error) {
        console.error(`Failed to parse date: ${dateString}`);
        return null;
    }
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
        <div className='evShell'>
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
                        <div className='bubDate'>
                            <p className='bubMonth'>{event.eventDate.toLocaleDateString(undefined, { month: 'long', timeZone: 'UTC' })}</p>
                            <p className='bubDay'>{event.eventDate.toLocaleDateString(undefined, { day: 'numeric', timeZone: 'UTC' })}</p>
                        </div>
                        <div className='bubInfo'>
                            <p className='bubTitle'>{event.eventTitle}</p>
                            <p className='bubLocation'>{event.eventLocation}</p>
                        </div>
                        <div className='bubBtnBox'>
                        <Link className='bubBtnDet' to={`/oneEvent/${event._id}`}>Details</Link>
                        </div>
                        
                        <br /><br />
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default DisplayAllEvents;