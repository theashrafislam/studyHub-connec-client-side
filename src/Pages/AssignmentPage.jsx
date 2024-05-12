import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";
import NoData from "../Components/NoData";

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

    console.log(assignments);

    return (
        <div className="my-10">
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
            <div>
                {
                    selectedDifficulty === "default" ? (
                        ""
                    ) : (
                        assignments && assignments.length > 0 ? (
                            assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} />)
                        ) : (
                            <NoData />
                        )
                    )
                }
            </div>


        </div>
    );
};

export default AssignmentPage;
