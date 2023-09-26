import React, { useEffect, useState } from "react";
import axios from "axios";
import '../pages/style.css';
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateReview = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/oneEntry/${id}`)
            .then((res) => {
                setName(res.data.name || "");
                setReviews(res.data.reviews || []);
            })
            .catch((err) => console.error(err));
    }, [id]);

    const updateReview = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateEntry/${id}`, {
                review: newReview
            })
            .then((res) => {
                console.log(res);
                setReviews([...reviews, newReview]);
                setNewReview("");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="revShell">
            <form className='revForm' onSubmit={updateReview}>
                <div className='revTitleBox' >
                    <p className='revTitle' >{name}</p>
                </div>
                <div className="btnBar" >
                    <button className="revBtn" onClick={() => navigate(-1)}>
                        Back
                    </button>
                    <Link className="revBtn" to={"/dash"}>
                        Home
                    </Link>
                </div>
                <div>
                    <br />
                    <p className='revRev'>Give Us Your Review for {name}</p>
                    <textarea
                        className="revEntryBox"
                        name="review"
                        value={newReview}
                        onChange={(e) => {
                            setNewReview(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <input className="revBtn" type="submit" />
                    <br />
                </div>
                <br />
            </form>

            <div className="reviewBox">
                
                    <p className='revRev1'>Reviews</p>
                    {reviews.slice().reverse().map((review, index) => (
                       
                        <div key={index} className="reviews">
                            <p style={{ width: '40%'}}></p>
                            <p style={{ width: '60%'}}>{review}</p>
                            <br />
                        </div>
                    
                ))}
                
            </div>
        </div>
    );
};

export default UpdateReview;

