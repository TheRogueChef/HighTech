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
                navigate('/dash')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className="">
            <form onSubmit={submitHandler}>
                <p className= ''>----- New Event -----</p>
                <div className= 'btnBar'>
                    <button className='btn' >Post</button>
                    <Link className='btn' to={`/events`}>All Events</Link> 
                    <Link className='btn' to={'/dash'}>Home</Link>
                </div>
                <br /><br />
                <div className= ''>
                    <label>What's it called? </label>
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
                    className= 'EntryBox' />
                    {
                        errors.eventDetails?
                        <p className='text-danger'>{errors.eventDetails.message}</p>:
                        null
                    }
                    <br />
                </div>
            </form>      
        </div>
    )
}

export default EventForm;