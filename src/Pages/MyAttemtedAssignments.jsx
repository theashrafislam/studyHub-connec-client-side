import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import AttemtedAssignmentCard from "./AttemtedAssignmentCard";

const MyAttemtedAssignments = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [myAssignment, setMyAssignment] = useState([])
    const url = `http://localhost:5000/submitted-assignment/${userEmail}`
    useEffect(() => {
        axios(url)
            .then(res => {
                console.log(res.data);
                setMyAssignment(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [url])
    return (
        <div className="my-12">
            <div className="space-y-5 text-center">
                <h1 className="text-3xl font-bold">Welcome to Your Attempted Assignments Page</h1>
                <p className="w-8/12 mx-auto">On this page, you'll find a comprehensive overview of all the assignments you've attempted. Dive into your completed tasks, review your progress, and stay organized with a detailed record of your efforts. Whether you're tracking your accomplishments or seeking areas for improvement, this page provides valuable insights to support your academic journey. Explore your attempted assignments now and take control of your learning experience!</p>
            </div>
            <div>
                {
                    myAssignment.map(assignment => <AttemtedAssignmentCard key={assignment._id} assignment={assignment}/>)
                }
            </div>
        </div>
    );
};

export default MyAttemtedAssignments;