import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EntryForm = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const strainOptions = ['Hybrid', 'Sativa', 'Indica', 'Edible', 'Other'];
    const [entry, setEntry] = useState({
        name: '',
        distributor: '',
        strain: '',
        shape: '',
        totalTHC: 0.0,
        totalCBD: 0.0,
        totalTerpenes: 0.0,
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
                setEntry({ name: "", distributor: "", strain: "", shape: '', totalTHC: "", totalCBD: "", totalTerpenes: "", taste: "", description: "" })
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
                    <label >Product Name </label>
                    <input type="text" onChange={handleInputChange} value={entry.name} name='name' className='InputBox' />
                    <br />
                    {
                        errors.name ?
                            <p className='text-danger'>{errors.name.message}</p> :
                            null
                    }
                    <br />
                    <label >Farm or Distributor </label>
                    <input type="text" onChange={handleInputChange} value={entry.distributor} name='distributor' className='InputBox' />
                    <br />
                    {
                        errors.distributor ?
                            <p className='text-danger'>{errors.distributor.message}</p> :
                            null
                    }
                    <br />
           
                    <label >Strain </label>
                    <select onChange={handleInputChange} value={entry.strain} name="strain" className="InputBox">
                        <option value=""></option>
                        {strainOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <br />
                    {
                        errors.strain ?
                            <p className='text-danger'>{errors.strain.message}</p> :
                            null
                    }
                    <br />
           
                    <label >What form was this in? </label>
                    <input type="text" onChange={handleInputChange} value={entry.shape} name='shape' className='InputBox' />
                    <p>(Flower, Bud, Dab, Resin, Edible, Beverage, Patch)</p>
                    <br />
                    {
                        errors.shape ?
                            <p className='text-danger'>{errors.shape.message}</p> :
                            null
                    }
                
                    <label >Total THC </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalTHC} name='totalTHC' className='InputBoxNum' />%
                    <br />
                    {
                        errors.totalTHC ?
                            <p className='text-danger'>{errors.totalTHC.message}</p> :
                            null
                    }
                    <br />
                    <br />
                    <label >Total CBD </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalCBD} name='totalCBD' className='InputBoxNum' />%
                    <br />
                    {
                        errors.totalCBD ?
                            <p className='text-danger'>{errors.totalCBD.message}</p> :
                            null
                    }
                    <br />
                    <br />
                    <label >Total Terpenes </label>
                    <input type="number" onChange={handleInputChange} value={entry.totalTerpenes} name='totalTerpenes' className='InputBoxNum' />%
                    <br />
                    {
                        errors.totalTerpenes ?
                            <p className='text-danger'>{errors.totalTerpenes.message}</p> :
                            null
                    }
                    <br />
                    <br />
                    <label >Taste </label>
                    <input type="text" onChange={handleInputChange} value={entry.taste} name='taste' className='InputBox' />
                    <br />
                    {
                        errors.taste ?
                            <p className='text-danger'>{errors.taste.message}</p> :
                            null
                    }
                    <br />
                    <label >Description </label>
                    <textarea onChange={handleInputChange} value={entry.description} name='description' className='EntryBox' />
                    {
                        errors.description ?
                            <p className='text-danger'>{errors.description.message}</p> :
                            null
                    }
                    <br /><br />

                </div>
                <button className='newEvBtn' >Post</button>

            </form>
            </div>
        </div>
    )
}

export default EntryForm;