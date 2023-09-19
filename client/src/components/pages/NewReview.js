import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ReviewForm = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const { id } = useParams();
    const [entry, setEntry] = useState({
        name: '',
        distributor: '',
        strain: '',
        shape: '',
        totalTHC: 0.0,
        totalCBD: 0.0,
        totalTerpines: 0.0,
        taste: '',
        description: '',
        review: ''
    });

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneEntry/" + id)
            .then((res) => {
               setEntry(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleInputChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newEntry', entry)
            .then((res) => {
                setEntry({ name: "", distributor: "", strain: "", shape: '', totalTHC: "", totalCBD: "", totalTerpines: "", taste: "", description: "", review: "" })
                navigate('/library')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className='newShell'>
            <div className='newLeft'></div>
            <div className='newRight'>
            <form onSubmit={submitHandler}>
                <p className='newTitle'>New Product</p>
                <div className='btnBar'>
                    <Link className='newBtn' to={'/dash'}>Home</Link>
                    <Link className='newBtn' to={'/library'}>Back</Link>
                </div>
                <br /><br /><br />
                <div className='formBody'>
                
                    <label >Review </label>
                    <textarea onChange={handleInputChange} value={entry.description} name='description' className='EntryBox' />
                    {
                        errors.description ?
                            <p className='text-danger'>{errors.description.message}</p> :
                            null
                    }
                    <br /><br />

                </div>
                <button className='newBtn' >Post</button>

            </form>
            </div>
        </div>
    )
}

export default ReviewForm;