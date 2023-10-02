import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import ScrollToTopButton from '../pages/ScrollToTopButton';

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
        <div className= 'dispAllShell'>
            <br />
            <div className='libCenter'>
            <p className='dispAllTitle'>All Stories</p>
            </div>
            <div className='btnBar'>
                <Link className='bubBtn' to={'/dash'}>Home</Link>
                <Link className='bubBtn' to={`/newStory`}>New Story</Link>
            </div> 
            <br />
            <div className='storyBox'>
            {stories.map((story, index) => (
                <div className='dispAllBubble' key={index}>
                    <p className='DAbubTitle'>{story.storyTitle}</p>
                    <p className='DAbubLocation'>{story.storyDate}</p>
                    <Link className='bubBtn' to={`/oneStory/${story._id}`}>Read More...</Link>
                    <br /><br />
                </div>
            ))}
            </div> 
            <ScrollToTopButton />
        </div>
    );
};

export default DisplayAllStories;