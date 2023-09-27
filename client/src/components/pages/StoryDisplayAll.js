import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


const DisplayAllStories = (props) => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allStories')
            .then((res) => {
                const initialStories = res.data.map((story) => {
                    return {
                        ...story,
                        storyDate: formatDate(story.storyDate),
                    
                    };
                });
                setStories(initialStories.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className= 'evShell'>
            <br />
            <div className='libCenter'>
            <p className='evTitle'>All Stories</p>
            </div>
            <div className='btnBar'>
                <Link className='bubBtn' to={'/dash'}>Home</Link>
                <Link className='bubBtn' to={`/newStory`}>New Story</Link>
            </div> 
            <br />
            <div className='evBox'>
            {stories.map((story, index) => (
                <div className='evBubble' key={index}>
                    <p className='bubTitle'>{story.storyTitle}</p>
                    <p className='bubLocation'>{story.storyAuthor}</p>
                    <p className='bubLocation'>{story.storyDate}</p>
                    <Link className='bubBtn' to={`/oneStory/${story._id}`}>Read More...</Link>
                    <br /><br />
                </div>
            ))}
            </div> 
        </div>
    );
};

export default DisplayAllStories;