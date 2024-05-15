import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";
import NoData from "../Components/NoData";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const AssignmentPage = () => {
    const allAssignments = useLoaderData();
    const [selectedDifficulty, setSelectedDifficulty] = useState("default");
    const [assignments, setAssignments] = useState(null);


    useEffect(() => {
        const filterAssignments = allAssignments.filter(assignment => {
            return selectedDifficulty === "All" || assignment.difficulty === selectedDifficulty;
        });
        setAssignments(filterAssignments);
    }, [selectedDifficulty, allAssignments]);

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };



    const handleUpdate = (id) => {
        axios.get(`https://study-hub-connect-server-side.vercel.app/all-assignment/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log(assignments);

    return (
        <HelmetProvider>
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="my-10">
                <Helmet>
                    <title>Assignment || StudyHub Connect</title>
                </Helmet>
                <div className="text-center lg:mx-0 mx-4">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Assignments</h1>
                    <p className="lg:w-7/12 lg:mx-auto">Choose the level of challenge that suits your expertise and goals. Whether you are a beginner looking to learn the basics, an intermediate developer seeking to enhance your skills, or an advanced coder ready for a complex task, select your difficulty level and embark on a journey of growth and accomplishment.</p>
                </div>
                <div className="my-5 flex justify-center items-center">
                    <select className="select select-secondary w-full max-w-xs" value={selectedDifficulty} onChange={handleDifficultyChange}>
                        <option disabled value="default">Pick your difficulty level</option>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
                    {
                        selectedDifficulty === "default" ? (
                            ""
                        )

                            :

                            (
                                assignments && assignments.length > 0 ? (
                                    assignments.map(assignment => <AssignmentCard setAssignments={setAssignments} handleUpdate={handleUpdate} key={assignment._id} assignment={assignment} />)
                                )

                                    :

                                    (
                                        <div className="col-span-full flex justify-center items-center">
                                            <NoData />
                                        </div>
                                    )
                            )
                    }
                </div>
            </motion.div>
        </HelmetProvider>
    );
};

export default AssignmentPage;
