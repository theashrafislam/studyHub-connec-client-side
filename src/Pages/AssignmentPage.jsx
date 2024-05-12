import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AssignmentPage = () => {
    const allAssignment = useLoaderData();
    const [selectedDifficulty, setSelectedDifficulty] = useState("default");

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    console.log(selectedDifficulty);

    return (
        <div className="my-10">
            <div className="text-center">
                <h1 className="text-xl lg:text-3xl font-semibold mb-2">Assignments</h1>
                <p>Choose the level of challenge that suits your expertise and goals. Whether you're a beginner looking to learn the basics, an intermediate developer seeking to enhance your skills, or an advanced coder ready for a complex task, select your difficulty level and embark on a journey of growth and accomplishment.</p>
            </div>
            <div className="my-5 flex justify-center items-center">
                <select className="select select-secondary w-full max-w-xs" value={selectedDifficulty} onChange={handleDifficultyChange}>
                    <option disabled value="default">Pick your difficulty level</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AssignmentPage;
