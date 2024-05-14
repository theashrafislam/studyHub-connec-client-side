import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../AuthProvider/AuthProvider";

const GiveMarkPage = () => {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const url = `http://localhost:5000/submitted-assignment/id/${id}?email=${user.email}`
    useEffect(() => {
        axios(url, {withCredentials: true})
        
            .then(res => {
                setLoadedData(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [id, url]);
    const { title, pdfDocLink, additionalNotes } = loadedData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        const submissionData = { mark, feedback }

        axios.put(`http://localhost:5000/submitted-assignment/${id}`, submissionData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Marks and feedback submitted successfully!')
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to submit marks and feedback. Please try again later.')
            })
    }
    return (
        <div className="mt-10">
            <div>
                {/* <h1><span className="font-semibold">Assignmet Title: </span>{title}</h1>
                <h1><span className="font-semibold">Assignmen PDF / Doc Link: </span>{pdfDocLink}</h1>
                <h1><span className="font-semibold">Additional Notes: </span>{additionalNotes}</h1> */}

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Assignmet Title</th>
                                <th>Additional Notes</th>
                                <th>Assignmen PDF / Doc Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>{title}</td>
                                <td>{additionalNotes}t</td>
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_1').showModal()}>Viewer</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            {/* <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p> */}
                                            <embed className="w-full min-h-[500px]" src={pdfDocLink}>
                                            
                                            </embed>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <form className="my-2 space-y-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="mark" className="font-semibold">Mark</label>
                        <input type="number" name="mark" id="mark" placeholder="Enter assignment mark" className="border-2 p-2 rounded-lg" required/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="feedback" className="font-semibold">Feedback</label>
                        <textarea name="feedback" placeholder="Write you feedback" className="border-2 p-2 rounded-lg" id="feedback" required></textarea>
                    </div>
                    <div>
                        <button className="btn btn-outline btn-secondary w-full">Submit</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default GiveMarkPage;