import PendingAssignmentsCard from "../Components/PendingAssignmentsCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import spinnerImg from "../../public/loading.gif";
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const PendingAssignments = () => {
    const [loadedData, setLoadedData] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    console.log(loadedData);
    const url = `https://study-hub-connect-server-side.vercel.app/submitted-assignment?email=${user.email}`
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
    }, [url])
    return (
        <HelmetProvider>
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="mt-10">
                <Helmet>
                    <title>Pending Assignments || StudyHub Connect</title>
                </Helmet>
                <div className="space-y-4 text-center lg:mx-0 mx-4">
                    <h1 className="text-3xl font-bold mb-2">Pending Assignments</h1>
                    <p className="lg:w-8/12 lg:mx-auto">On the Pending Assignments page, you will find all the assignments that await assessment or grading. Here, instructors can efficiently manage and review submissions, providing timely feedback and marking assignments as completed.</p>
                </div>
                <div className="flex justify-center items-center mt-20">
                    {loading && <img src={spinnerImg} className="w-[150px]" alt="Loading..." />}
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Examinee Name</th>
                                    <th>Assignment Title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loadedData?.map((assignment, index) => <PendingAssignmentsCard
                                        key={index} assignment={assignment} index={index}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </HelmetProvider>
    );
};

export default PendingAssignments;