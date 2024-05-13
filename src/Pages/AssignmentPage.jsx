import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";
import NoData from "../Components/NoData";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import toast from 'react-hot-toast';

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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/all-assignment/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0) {
                    toast.success('Assignment deleted successfully.');
                    setAssignments(prevAssignments => prevAssignments.filter(assignment => assignment._id !== id));
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to delete assignment.')
            })
    }

    const handleUpdate = (id) => {
        axios.get(`http://localhost:5000/all-assignment/${id}`)
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
            <div className="my-10">
                <Helmet>
                    <title>Assignment || StudyHub Connect</title>
                </Helmet>
                <div className="text-center">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Assignments</h1>
                    <p>Choose the level of challenge that suits your expertise and goals. Whether you are a beginner looking to learn the basics, an intermediate developer seeking to enhance your skills, or an advanced coder ready for a complex task, select your difficulty level and embark on a journey of growth and accomplishment.</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between">
                    {
                        selectedDifficulty === "default" ? (
                            ""
                        ) : (
                            assignments && assignments.length > 0 ? (
                                assignments.map(assignment => <AssignmentCard handleUpdate={handleUpdate} handleDelete={handleDelete} key={assignment._id} assignment={assignment} />)
                            ) : (
                                <NoData />
                            )
                        )
                    }
                </div>


            </div>
        </HelmetProvider>
    );
};

export default AssignmentPage;
