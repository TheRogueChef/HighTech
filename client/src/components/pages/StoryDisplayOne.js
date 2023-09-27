import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../pages/style.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const OneStory = (props) => {
    const { id } = useParams();
    const [story, setStory] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneStory/" + id)
            .then((res) => {
                if (isMounted) {
                    res.data.storyDate = formatDate(res.data.storyDate);
                    setStory(res.data);

                }
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {
            isMounted = false;

        };
    }, [id]);




    return (
        <div className='dispDad'>
            <div className='dispBox'>
                <p className='dispName'>"{story.storyTitle}"</p>
                <br />
                <div className='dispShell'>
                    <div className='topBox'>
                        <p>Location:<br /><p className='dispWords'>{story.storyLocation}</p></p>
                        <p>Author:<br /><p className='dispWords'>{story.storyAuthor}</p></p>
                        <p>Date:<br /><p className='dispWords'>{story.storyDate}</p></p>
                    </div>

                    <p className='dispP2'>Details:<br /><p className='dispWords2'>{story.storyDetails}</p></p>
                </div>
                <br /><br />
            </div>
            <div className='btnBar'>

                <Link className='revBtn' to={`/dash`}>Home</Link>
                <Link className='revBtn' to={`/stories`}>Back</Link>
            </div>
            <br />
        </div>
    )
}

export default OneStory;