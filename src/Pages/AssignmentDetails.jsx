import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import spinnerImg from "../../public/loading.gif";
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const AssignmentDetails = () => {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState({});
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    console.log(loadedData);
    const { title, marks, image, difficulty, date, description, _id } = loadedData;
    const url = `https://study-hub-connect-server-side.vercel.app/all-assignment/${id}?email=${user.email}`
    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                setLoadedData(res.data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url]);

    return (
        <HelmetProvider>
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="my-12">
                <Helmet>
                    <title>Assignment Details || StudyHub Connect</title>
                </Helmet>
                <div className="text-center lg:mx-0 mx-4">
                    <h1 className="text-3xl font-semibold mb-2">Assignment Details</h1>
                    <p className="lg:w-2/3 lg:mx-auto">Welcome to the Assignment Details page! Here, you will find comprehensive information about the selected assignment. Explore its description, difficulty level, marks, due date, and more. Take action by taking the assignment, updating it if needed, or returning to the assignments list. Dive into the details and make the most of your learning journey!</p>
                </div>
                <div className="flex justify-center items-center mt-20">
                    {loading && <img src={spinnerImg} className="w-[150px]" alt="Loading..." />}
                </div>
                <div className="mt-5 space-y-5 mx-4 lg:mx-0">
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
            </motion.div>
        </HelmetProvider>
    );
};

export default AssignmentDetails;