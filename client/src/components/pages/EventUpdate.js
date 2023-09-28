import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const UpdateEvent = (props) => {
    const { id } = useParams();
    const [eventTitle, setEventTitle] = useState();
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState();
    const [eventDetails, setEventDetails] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const previousLocation = location.state?.referrer || "/events";

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneEvent/" + id)
            .then((res) => {
                setEventTitle(res.data.eventTitle);
                setEventDate(formatDate(res.data.eventDate));
                setEventLocation(res.data.eventLocation);
                setEventDetails(res.data.eventDetails);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        date.setHours(0, 0, 0, 0);
    
        const options = {
            year: 'numeric',
            month: '2-digit', // Use '2-digit' for zero-padded months
            day: '2-digit',   // Use '2-digit' for zero-padded days
            timeZone: 'UTC', // Set the time zone to UTC
        };
    
        return date.toLocaleDateString('en-US', options);
    };
    

    const updateEvent = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/updateEvent/" + id, {
                eventTitle,
                eventDate,
                eventLocation,
                eventDetails,
            })
            .then((res) => {
                console.log(res);
                navigate(previousLocation);
            })
            .catch((err) => console.log(err));
    };

    const deleteEvent = () => {
        axios
            .delete(`http://localhost:8000/api/allEvents/${id}`)
            .then((res) => {
                navigate("/events");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="newEvShell">
            <div className='newLeft'></div>
            <div className='newRight'>
            <form onSubmit={updateEvent}>
            <br />
                <p className="newTitle">Update Event</p>
                <div className="btnBar">
                    <Link className="newBtn" to={"/dash"}>
                        Home
                    </Link>
                    <button className="newBtn" onClick={() => navigate(-1)}>
                        Back
                    </button>
                </div>
                <br />
                <br />
                <div className="formBody">
                    <label>Event Title</label>
                    <input
                    className="InputBox"
                    type="text"
                    name="eventTitle"
                    value={eventTitle}
                    onChange={(e) => {
                        setEventTitle(e.target.value);
                    }}
                    />
                    <br />
                    <br />
                    <label>Event Date</label>
                    <input
                        className="InputBox"
                        type="date"
                        name="eventDate"
                        value={eventDate}
                        onChange={(e) => {
                            setEventDate(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <label>Event Location</label>
                    <input
                        className="InputBox"
                        type="text"
                        name="eventLocation"
                        value={eventLocation}
                        onChange={(e) => {
                            setEventLocation(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <label>Event Details</label>
                    <br />
                    <textarea
                        className="EvEntryBox"
                        name="eventDetails"
                        value={eventDetails}
                        onChange={(e) => {setEventDetails(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <div className='bottomBtnBar'>
                    <input className="newBtn" type="submit" />
                    <button onClick={deleteEvent} className="newBtn">
                        Delete
                    </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default UpdateEvent;