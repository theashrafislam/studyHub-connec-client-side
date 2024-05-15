import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../AuthProvider/AuthProvider";

const AssignmentUpdate = () => {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState({});
    const { user } = useContext(AuthContext);
    console.log(loadedData);
    const [startDate, setStartDate] = useState('');
    const [assignmentDifficulty, setAssignmentDifficulty] = useState('');


    useEffect(() => {
        if (user?.email) {
            axios.get(`https://study-hub-connect-server-side.vercel.app/all-assignment/${id}?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    // console.log(res.data);
                    setLoadedData(res.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [id, user])
    const { marks, image, difficulty, description, _id, title, date } = loadedData;
    // console.log(difficulty);

    const handleUpdateAssignmentForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const marks = form.mark.value;
        const description = form.description.value;
        const image = form.image.value;
        const difficulty = assignmentDifficulty;
        const date = form.date.value;
        const assignmentData = { title, marks, description, image, difficulty, date }
        // console.log(assignmentData);

        axios.put(`https://study-hub-connect-server-side.vercel.app/all-assignment/${id}`, assignmentData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Congratulations! Assignment has been successfully updated.')
                }
            })
            .catch(error => {
                console.log(error);
                toast.success("We're sorry, but there was an issue updating your assignment.")
            })
    }
    return (
        <HelmetProvider>
            <div className="my-10 lg:mx-0 mx-4">
                <Helmet>
                    <title>Update Assignment || StudyHub Connect</title>
                </Helmet>
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-xl md:text-3xl">Update Assignment</h1>
                    <p className="text-lg">Welcome to the Update Assignment page! Here, you have the opportunity to modify and refine your assignments with ease. Whether you need to correct errors, adjust parameters, or enhance the content, this page empowers you to keep your assignments up-to-date and relevant. Take control of your assignments and ensure they align perfectly with your objectives and expectations.</p>
                </div>
                <div className="mt-8">
                    <form className="space-y-4" onSubmit={handleUpdateAssignmentForm}>
                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="title" className="text-lg font-bold">Title</label>
                                <input type="text" defaultValue={title} name="title" id="title" className="border-2 p-2 rounded-lg" placeholder="Enter your title" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="marks" className="text-lg font-bold">Marks</label>
                                <input type="number" name="mark" id="marks" defaultValue={marks} className="border-2 p-2 rounded-lg" placeholder="Marks" required />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-lg font-bold">Description</label>
                            <textarea name="description" defaultValue={description} id="description" className="border-2 p-2 rounded-lg" placeholder="Write your description" required></textarea>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="image" className="text-lg font-bold">Image URL</label>
                                <input type="text" name="image" id="image" defaultValue={image} className="border-2 p-2 rounded-lg" placeholder="Enter your image URL" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-lg font-bold">Assignment Difficulty</label>
                                <select
                                    className="select select-bordered w-full"
                                    onChange={(e) => setAssignmentDifficulty(e.target.value)}
                                >
                                    <option value="" disabled>Select Assignment Difficulty Level</option>
                                    <option value="Easy" selected={difficulty === "Easy"}>Easy</option>
                                    <option value="Medium" selected={difficulty === "Medium"}>Medium</option>
                                    <option value="Hard" selected={difficulty === "Hard"}>Hard</option>
                                </select>


                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="date" className="text-lg font-bold">Date</label>
                            <input type="date" name="date" id="date" defaultValue={date} className="border-2 p-2 rounded-lg" placeholder="Item Name" required />
                        </div>
                        {/* <div>
                            <label htmlFor="" className="text-lg mr-3 font-bold">Select Date</label>
                            <DatePicker className="border-2 p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div> */}
                        <div className="flex flex-col">
                            <button type="submit" className="btn btn-outline btn-secondary w-full font-bold text-lg">Update Assignment</button>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default AssignmentUpdate;
