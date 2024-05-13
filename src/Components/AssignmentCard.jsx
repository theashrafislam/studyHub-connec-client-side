import axios from 'axios';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AssignmentCard = ({ assignment, setAssignments }) => {
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const { marks, image, date, difficulty, _id, title } = assignment;
    console.log(userEmail);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/all-assignment/${id}`, { data: { userEmail }})
                .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount > 0) {
                        toast.success('Assignment deleted successfully.');
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        setAssignments(oldAssignments => oldAssignments.filter(assignment => assignment._id !== id));
                    }
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: "Failed to delete assignment.",
                        text: "Access to delete the assignment is restricted and not permitted for you.",
                        icon: "error"
                      });
                    toast.error('Failed to delete assignment.')
                })

              
            }
          });
        
    }
    
    return (
        <div>
            <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full max-w-xs rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{difficulty}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <p className="bg-green-400 text-white text-center py-2 text-xl rounded-full">{marks}</p>
                <div className="flex justify-between items-center gap-2 mt-4 ">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-secondary text-base">Delete</button>
                    <Link to={`/assignment-update/${_id}`} className="btn btn-outline btn-secondary text-base">Update</Link>
                    <Link to={`/all-assignment/${_id}`} className="btn btn-outline btn-secondary text-base">View Details</Link>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default AssignmentCard;