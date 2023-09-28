import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/style.css';

const StoryForm = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [story, setStory] = useState({
        storyTitle: '',
        storyAuthor: '',
        storyDate: '',
        storyLocation: '',
    });

    const handleInputChange = (e) => {
        setStory({ ...story, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newStory', story)
            .then((res) => {
                setStory({ ...story, storyTitle: "", storyDate: '',storyAuthor: '', storyLocation: "" })
                navigate('/stories')
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
                    <p className='newTitle'>New Story</p>
                    <div className='btnBar'>

                        <Link className='newBtn' to={`/stories`}>All Stories</Link>
                        <Link className='newBtn' to={'/dash'}>Home</Link>
                    </div>
                    <br /><br />
                    <div className='formBody'>
                        <label>Name Your Story</label>
                        <br />
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={story.storyTitle} name='storyTitle'
                            className='InputBox' />
                        <br />
                        {
                            errors.storyTitle ?
                                <p className='text-danger'>{errors.storyTitle.message}</p> :
                                null
                        }
                        <br />
                        <label>Who's story is this?</label>
                        <br />
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={story.storyAuthor} name='storyAuthor'
                            className='InputBox' />
                        <br />
                        {
                            errors.storyAuthor ?
                                <p className='text-danger'>{errors.storyAuthor.message}</p> :
                                null
                        }
                        <br />
                        <label>When did it Happen? </label>
                        <br />
                        <input
                            type="date"
                            onChange={handleInputChange}
                            value={story.storyDate}
                            name='storyDate'
                            className='InputBox' />
                        <br />
                        {
                            errors.storyDate ?
                                <p className='text-danger'>{errors.storyDate.message}</p> :
                                null
                        }
                        <br />
                        <label style={{ color: 'greenyellow'}}>Where did it Happen?</label>
                        <br />
                        <input
                            type="text"
                            onChange={handleInputChange}
                            value={story.storyLocation}
                            name='storyLocation'
                            className='InputBox' />
                        <br />
                        {
                            errors.storyLocation ?
                                <p className='text-danger'>{errors.storyLocation.message}</p> :
                                null
                        }
                        <br />
                        <label>The Story:</label>
                        <br />
                        <textarea
                            type="text"
                            onChange={handleInputChange}
                            value={story.storyDetails}
                            name='storyDetails'
                            className='NSEntryBox' />
                        {
                            errors.storyDetails ?
                                <p className='text-danger'>{errors.storyDetails.message}</p> :
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

export default StoryForm;