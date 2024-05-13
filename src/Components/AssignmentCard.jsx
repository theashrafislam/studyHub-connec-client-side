import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignment, handleDelete}) => {
    const { marks, image, date, difficulty, _id, title } = assignment;
    
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
                    <Link className="btn btn-outline btn-secondary text-base">View Details</Link>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default AssignmentCard;