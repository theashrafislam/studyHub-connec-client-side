// import { useLoaderData } from "react-router-dom";
import PendingAssignmentsCard from "../Components/PendingAssignmentsCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PendingAssignments = () => {
    // const loadedData = useLoaderData();
    const [loadedData, setLoadedData] = useState([]);
    const {user} = useContext(AuthContext)
    console.log(loadedData);
    const url = `https://study-hub-connect-server-side.vercel.app/submitted-assignment?email=${user.email}`
    useEffect( () => {
        axios(url, {withCredentials: true})
            .then(res => {
                setLoadedData(res.data)
            })
    }, [])
    return (
        <div className="mt-10">
            <div className="space-y-4 text-center lg:mx-0 mx-4">
                <h1 className="text-3xl font-bold mb-2">Pending Assignments</h1>
                <p className="lg:w-8/12 lg:mx-auto">On the Pending Assignments page, you'll find all the assignments that await assessment or grading. Here, instructors can efficiently manage and review submissions, providing timely feedback and marking assignments as completed.</p>
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
        </div>
    );
};

export default PendingAssignments;