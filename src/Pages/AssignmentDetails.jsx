import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AssignmentDetails = () => {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState({})
    useEffect(() => {
        axios(`http://localhost:5000/all-assignment/${id}`)
            .then(res => {
                setLoadedData(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    const { title, marks, image, difficulty, date, description, _id} = loadedData;
    return (
        <div className="my-12">
            <div className="text-center">
                <h1 className="text-3xl font-semibold mb-2">Assignment Details</h1>
                <p>Welcome to the Assignment Details page! Here, you'll find comprehensive information about the selected assignment. Explore its description, difficulty level, marks, due date, and more. Take action by taking the assignment, updating it if needed, or returning to the assignments list. Dive into the details and make the most of your learning journey!</p>
            </div>
            <div className="mt-5 space-y-5">
                <img className="w-4/12 mx-auto" src={image} alt="" />
                <div className="space-y-5">
                    <h1 className="text-3xl"><span className="font-semibold">Title: </span>{title}</h1>
                    <p className="text-xl"><span className="font-semibold">Description: </span>{description}</p>
                    <p className="text-xl"><span className="font-semibold">Difficulty: </span>{difficulty}</p>
                    <p className="text-xl"><span className="font-semibold">Mark: </span>{marks}</p>
                    <p className="text-xl"><span className="font-semibold">Date: </span>{date}</p>
                    <Link to={`/assignment-submission-form/${_id}`} className="btn btn-outline btn-secondary w-full font-bold text-lg">Take Assignment</Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;