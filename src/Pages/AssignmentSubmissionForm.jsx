import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from "react-helmet-async";
import spinnerImg from "../../public/loading.gif";
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const AssignmentSubmissionForm = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const displayName = user?.displayName;
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);

    const url = `https://study-hub-connect-server-side.vercel.app/all-assignment/${id}?email=${userEmail}`
    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                setTitle(res?.data?.title)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    const handleAssignmentSubmission = (e) => {
        e.preventDefault();
        const form = e.target;
        const pdfDocLink = form.link.value;
        const additionalNotes = form.additionalNotes.value;
        const assignmentData = { pdfDocLink, additionalNotes, userEmail, id, title, displayName }
        console.log(assignmentData);

        axios.post('https://study-hub-connect-server-side.vercel.app/submitted-assignment', assignmentData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Congratulations on successfully submitting your assignment! Keep up the great work!"');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Submission unsuccessful. Please retry or contact support for assistance.')
            })
    }

    return (
        <HelmetProvider>
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="max-w-4xl p-6 lg:mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-12 mx-4">
                <Helmet>
                    <title>Assignment Submission Form || StudyHub Connect</title>
                </Helmet>
                <div className="flex justify-center items-center mt-20">
                    {loading && <img src={spinnerImg} className="w-[150px]" alt="Loading..." />}
                </div>
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Assignment Submission Form</h2>
                
                <form onSubmit={handleAssignmentSubmission}>
                    <div className="mt-6 space-y-5">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">PDF/Doc Link</label>
                            <input id="username" type="text" name="link" placeholder="Enter PDF/Doc Link" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Additional Notes</label>
                            <textarea name="additionalNotes" placeholder="Add Additional Notes" id="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </form>
                <Toaster />
            </motion.div>
        </HelmetProvider>
    );
};

export default AssignmentSubmissionForm;