import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AssignmentUpdate = () => {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState({});
    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        axios(`http://localhost:5000/all-assignment/${id}`)
            .then(res => {
                setLoadedData(res.data)
                if (res.data?.date) {
                    // Convert date to yyyy-MM-dd format
                    const formattedDate = new Date(res.data.date).toISOString().split('T')[0];
                    setStartDate(formattedDate);
                }
            })
    }, [id])
    console.log(loadedData);
    const { marks, image, difficulty, description, _id, title } = loadedData;

    return (
        <HelmetProvider>
            <div className="my-10">
                <Helmet>
                    <title>Update Assignment || StudyHub Connect</title>
                </Helmet>
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-xl md:text-3xl">Update Assignment</h1>
                    <p className="text-lg">Welcome to the Update Assignment page! Here, you have the opportunity to modify and refine your assignments with ease. Whether you need to correct errors, adjust parameters, or enhance the content, this page empowers you to keep your assignments up-to-date and relevant. Take control of your assignments and ensure they align perfectly with your objectives and expectations.</p>
                </div>
                <div className="mt-8">
                    <form className="space-y-4" >
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
                                <select className="select select-bordered w-full" value={difficulty}>
                                    <option value="" disabled>Select Assignment Difficulty Level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="date" className="text-lg font-bold">Date</label>
                            <input type="date" name="date" id="date" defaultValue={startDate} className="border-2 p-2 rounded-lg" placeholder="Item Name" required />
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
            </div>
        </HelmetProvider>
    );
};

export default AssignmentUpdate;
