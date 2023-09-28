import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/style.css';

const DocForm = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [doc, setDoc] = useState({
        docTitle: '',
        docAuthor: '',
        docDate: '',
        docLocation: '',
        docDetails: '',
    });

    const handleInputChange = (e) => {
        setDoc({ ...doc, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newDoc', doc)
            .then((res) => { 
                setDoc({ ...doc, docTitle: "",docAuthor: '', docDate: '',docLocation: '', docDetails: "" })
                navigate('/docs')
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
                    <p className='newTitle'>New Doc</p>
                    <div className='btnBar'>

                        <Link className='newBtn' to={`/docs`}>All Docs</Link>
                        <Link className='newBtn' to={'/dash'}>Home</Link>
                    </div>
                    <br /><br />
                    <div className='formBody'>
                        <label>Doc Name</label>
                        <br />
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={doc.docTitle} name='docTitle'
                            className='InputBox' />
                        <br />
                        {
                            errors.docTitle ?
                                <p className='text-danger'>{errors.docTitle.message}</p> :
                                null
                        }
                        <br />
                        <label>Doc Date</label>
                        <br />
                        <input
                            type="date"
                            onChange={handleInputChange}
                            value={doc.docDate}
                            name='docDate'
                            className='InputBox' />
                        <br />
                        {
                            errors.docDate ?
                                <p className='text-danger'>{errors.docDate.message}</p> :
                                null
                        }
                        
                        <br />
                        <label>The Doc Link</label>
                        <br />
                        <textarea
                            type="text"
                            onChange={handleInputChange}
                            value={doc.docDetails}
                            name='docDetails'
                            className='revEntryBox' />
                        {
                            errors.docDetails ?
                                <p className='text-danger'>{errors.docDetails.message}</p> :
                                null
                        }
                        <br /><br />
                        <button className='NSBtn' >Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DocForm;