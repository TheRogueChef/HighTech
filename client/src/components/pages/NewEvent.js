import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

import '../pages/style.css';

const EventForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [event, setEvent] = useState({
        eventTitle: '',
        eventDate: '',
        eventLocation: '',
    });

    const handleInputChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newEvent', event)
            .then((res) => {
                setEvent({...event, eventTitle:"", eventDate: '', eventLocation: ""})
                navigate('/events')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className="newEvShell">
<div className='newLeft'></div>
<div className='newRight'>
            <form onSubmit={submitHandler}>
                <p className= 'newTitle'>New Event</p>
                <div className= 'btnBar'>
                    
                    <Link className='newBtn' to={`/events`}>All Events</Link> 
                    <Link className='newBtn' to={'/dash'}>Home</Link>
                </div>
                <br /><br />
                <div className= 'formBody'>
                    <label>What's it called? </label>
                    <br />
                    <input 
                    type="text"
                    onChange={handleInputChange} 
                    value={event.eventTitle} name='eventTitle' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventTitle?
                        <p className='text-danger'>{errors.eventTitle.message}</p>:
                        null
                    }
                    <br />
                    <label>When is it? </label>
                    <br />
                    <input 
                    type="date" 
                    onChange={handleInputChange} 
                    value={event.eventDate} 
                    name='eventDate' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventDate?
                        <p className='text-danger'>{errors.eventDate.message}</p>:
                        null
                    }
                    <br />
                    <label>Where is it?</label>
                    <br />
                    <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={event.eventLocation} 
                    name='eventLocation' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventLocation?
                        <p className='text-danger'>{errors.eventLocation.message}</p>:
                        null
                    }
                    <br />
                    <label>Details:</label>
                    <br  />
                    <textarea 
                    type="text" 
                    onChange={handleInputChange} 
                    value={event.eventDetails} 
                    name='eventDetails' 
                    className= 'EvEntryBox' />
                    {
                        errors.eventDetails?
                        <p className='text-danger'>{errors.eventDetails.message}</p>:
                        null
                    }
                    <br /><br />
                    <button className='newEvBtn' >Post</button>
                </div>
            </form>   
            </div> 
        </div>
    )
}

export default EventForm;