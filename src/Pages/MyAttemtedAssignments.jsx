import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import AttemtedAssignmentCard from "./AttemtedAssignmentCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyAttemtedAssignments = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [myAssignment, setMyAssignment] = useState([])
    const url = `https://study-hub-connect-server-side.vercel.app/submitted-assignment/email/${userEmail}?email=${userEmail}`
    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setMyAssignment(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [url])
    return (
        <HelmetProvider>
            <div className="my-12">
                <Helmet>
                    <title>Your Attempted Assignments || StudyHub Connect</title>
                </Helmet>
                <div className="space-y-5 text-center mx-4">
                    <h1 className="text-3xl font-bold">Welcome to Your Attempted Assignments Page</h1>
                    <p className="lg:w-8/12 lg:mx-auto">On this page, you will find a comprehensive overview of all the assignments you are attempted. Dive into your completed tasks, review your progress, and stay organized with a detailed record of your efforts. Whether you are tracking your accomplishments or seeking areas for improvement, this page provides valuable insights to support your academic journey. Explore your attempted assignments now and take control of your learning experience!</p>
                </div>
                <div className="">
                    {
                        myAssignment.map(assignment => <AttemtedAssignmentCard key={assignment._id} assignment={assignment} />)
                    }
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyAttemtedAssignments;