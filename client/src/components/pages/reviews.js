import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateEntry = (props) => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [distributor, setDistributor] = useState();
    const [strain, setStrain] = useState();
    const [shape, setShape] = useState();
    const [totalTHC, setTotalTHC] = useState();
    const [totalCBD, setTotalCBD] = useState();
    const [totalTerpines, setTotalTerpines] = useState();
    const [taste, setTaste] = useState();
    const [description, setDescription] = useState();
    const [review, setReview] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneEntry/" + id)
            .then((res) => {
                setName(res.data.name);
                setDistributor(res.data.distributor);
                setStrain(res.data.strain);
                setShape(res.data.shape);
                setTotalTHC(res.data.totalTHC);
                setTotalCBD(res.data.totalCBD);
                setTotalTerpines(res.data.totalTerpines);
                setTaste(res.data.taste);
                setDescription(res.data.description);
                setReview(res.data.review);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const updateEntry = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/updateEntry/" + id, {
                name,
                distributor,
                strain,
                shape,
                totalTHC,
                totalCBD,
                totalTerpines,
                taste,
                description,
                review
            
            })
            .then((res) => {
                console.log(res);
                navigate("/library");
            })
            .catch((err) => console.log(err));
    };

    const deleteEntry = () => {
        axios
            .delete(`http://localhost:8000/api/allEntries/${id}`)
            .then((res) => {
                navigate("/library");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="">
            <form onSubmit={updateEntry}>
            <br />
                <p className=""> Reviews</p>
                <div className="btnBar">
                    <input className="btn" type="submit" />
                    <button onClick={deleteEntry} className="btn">
                        Delete
                    </button>
                    <Link className="btn" to={"/dash"}>
                        Home
                    </Link>
                </div>
              <div>
                    <br />
                    <label>Details</label>
                    <br />
                    <textarea
                        className="EntryBox"
                        name="review"
                        value={review}
                        onChange={(e) => {setReview(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                </div>
            </form>
        </div>
    );
};

export default UpdateEntry;