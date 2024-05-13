import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { format } from 'date-fns';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [assignmentDifficulty, setAssignmentDifficulty] = useState('');
    const formattedDate = format(startDate, 'yyyy-MM-dd');

    const handleAssignmentDifficulty = (e) => {
        const selectedDifficulty = e.target.value;
        const capitalizedDifficulty = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
        setAssignmentDifficulty(capitalizedDifficulty);
    }    

    const handleCreateAssignmentForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const marks = form.mark.value;
        const description = form.description.value;
        const image = form.image.value;
        const difficulty = assignmentDifficulty;
        const date = formattedDate;
        const assignmentData = { title, marks, description, image, difficulty, date }
        console.log(assignmentData);

        axios.post('http://localhost:5000/create-assignment', assignmentData)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Assignment created successfully.');
                    form.reset()
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to create assignment. Please try again later.');
            })
    }

    return (
        <HelmetProvider>
            <div className="my-10">
                <Helmet>
                    <title>Create Assignment || StudyHub Connect</title>
                </Helmet>
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-xl md:text-3xl">Create Assignment</h1>
                    <p className="text-lg">Welcome to the Create Assignment page! Here, you can easily create new assignments to share with all users on StudyHub Connect. Simply fill out the form below with the assignment details, including the title, description, marks, thumbnail image URL, difficulty level, and due date. Once submitted, your assignment will be available for all users to access and complete. Get started now and enrich the learning experience for everyone on our platform!</p>
                </div>
                <div className="mt-8">
                    <form className="space-y-4" onSubmit={handleCreateAssignmentForm}>
                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="title" className="text-lg font-bold">Title</label>
                                <input type="text" name="title" id="title" className="border-2 p-2 rounded-lg" placeholder="Enter your title" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="marks" className="text-lg font-bold">Marks</label>
                                <input type="number" name="mark" id="marks" className="border-2 p-2 rounded-lg" placeholder="Item Name" required />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-lg font-bold">Description</label>
                            <textarea name="description" id="description" className="border-2 p-2 rounded-lg" placeholder="Write your description" required></textarea>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="image" className="text-lg font-bold">Image URL</label>
                                <input type="text" name="image" id="image" className="border-2 p-2 rounded-lg" placeholder="Enter your image URL" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-lg font-bold">Assignment Difficulty</label>
                                <select className="select select-bordered w-full" value={assignmentDifficulty} onChange={handleAssignmentDifficulty}>
                                    <option value="" disabled>Select Assignment Difficulty Level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="text-lg mr-3 font-bold">Select Date</label>
                            <DatePicker required className="border-2 p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="btn btn-outline btn-secondary w-full font-bold text-lg">Create Assignment</button>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default CreateAssignment;
