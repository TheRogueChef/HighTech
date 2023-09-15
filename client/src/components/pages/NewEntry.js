import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


const EntryForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [entry, setEntry] = useState({
        name: '',
        distributor: '',
        strain: '',
        shape: '',
        totalTHC: 0.0,
        totalCBD: 0.0,
        totalTerpines: 0.0,
        taste: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newEntry', entry)
            .then((res) => {
                setEntry({name:"", distributor: "", strain: "", shape: '', totalTHC: "", totalCBD: "", totalTerpines: "", taste: "", description: ""})
                navigate('/library')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className=''>
            <form  onSubmit={submitHandler}>
                <p className= ''>New Weed</p>
                <div className=''>
                    <button className='' >Post</button>
                    <Link className='' to={'/dash'}>Home</Link>
                    <Link className='' to={'/library'}>Back</Link>
                </div>
                <br /><br />
                <div className= ''>
                    <label >Weed Name </label>
                    <input type="text" onChange={handleInputChange} value={entry.name} name='name' className= 'InputBox' />
                    <br />
                    {
                        errors.name?
                        <p className='text-danger'>{errors.name.message}</p>:
                        null
                    }
                    <br />
                    <label >Farm or Distributor </label>
                    <input type="text" onChange={handleInputChange} value={entry.distributor} name='distributor' className= 'InputBox' />
                    <br />
                    {
                        errors.distributor?
                        <p className='text-danger'>{errors.distributor.message}</p>:
                        null
                    }
                    <br />
                    <br />
                    <label >Strain </label>
                    <input type="text" onChange={handleInputChange} value={entry.strain} name='strain' className= 'InputBox' />
                    <br />
                    {
                        errors.strain?
                        <p className='text-danger'>{errors.strain.message}</p>:
                        null
                    }
                    <br />
                    <br />
                    <label >What form was this weed in? </label>
                    <input type="text" onChange={handleInputChange} value={entry.shape} name='shape' className= 'InputBox' />
                    <br />
                    {
                        errors.shape?
                        <p className='text-danger'>{errors.shape.message}</p>:
                        null
                    }
                    <br />
                    <label >Total THC </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalTHC} name='totalTHC' className= 'InputBox' />
                    <br />
                    {
                        errors.totalTHC?
                        <p className='text-danger'>{errors.totalTHC.message}</p>:
                        null
                    }
                    <br />
                    <br />
                    <label >Total CBD </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalCBD} name='totalCBD' className= 'InputBox' />
                    <br />
                    {
                        errors.totalCBD?
                        <p className='text-danger'>{errors.totalCBD.message}</p>:
                        null
                    }
                    <br />
                    <br />
                    <label >Total Terpines </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalTerpines} name='totalTerpines' className= 'InputBox' />
                    <br />
                    {
                        errors.totalTerpines?
                        <p className='text-danger'>{errors.totalTerpines.message}</p>:
                        null
                    }
                    <br />
                    <br />
                    <label >Taste </label>
                    <input type="text" onChange={handleInputChange} value={entry.taste} name='taste' className= 'InputBox' />
                    <br />
                    {
                        errors.taste?
                        <p className='text-danger'>{errors.taste.message}</p>:
                        null
                    }
                    <br />
                    <label >Description </label>
                    <br/>
                    <textarea onChange={handleInputChange} value={entry.description} name='description' className= 'EntryBox' />
                    {
                        errors.description?
                        <p className='text-danger'>{errors.description.message}</p>:
                        null
                    }
                    <br /><br />
                </div>
               
                
            </form>
        </div>
    )
}

export default EntryForm;