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
                const newDoc = res.data;
                setDoc({ ...doc, docTitle: "", docAuthor: '', docDate: '', docLocation: '', docDetails: "" })
                window.location.reload();
                props.updateDocList(newDoc);
            })
            .catch((err) => {
                setErrors(err)

            })
    }

    return (
        <div className="newDocShell">
                <form onSubmit={submitHandler}>
                    <p className='newDocTitle'>Add A New Doc</p>
                        <div>
                        <p className='newDocLabel'>Doc Name</p>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={doc.docTitle} name='docTitle'
                            className='newDocEntryBox' />
                        {
                            errors.docTitle ?
                                <p className='text-danger'>{errors.docTitle.message}</p> :
                                null
                        }
                        </div>
                        <br />
                        <div>
                        <p className='newDocLabel'>Doc Link</p>
                        <input
                            type="url"
                            onChange={handleInputChange}
                            value={doc.docDetails}
                            name='docDetails'
                            className='newDocEntryBox' />
                        {
                            errors.docDetails ?
                                <p className='text-danger'>{errors.docDetails.message}</p> :
                                null
                        }
                        </div>
                    
                    <br />
                    <button className='docBtn' >Post</button>
                </form>
          
        </div>
    )
}

export default DocForm;