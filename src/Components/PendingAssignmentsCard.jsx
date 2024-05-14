import { Link } from "react-router-dom";

const PendingAssignmentsCard = ({ assignment, index }) => {
    const { displayName, title, submissionStatus } = assignment;
    console.log(assignment._id);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        console.log(mark, feedback);
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{title}</td>
            <td>{submissionStatus}</td>
            <td><Link to={`/give-mark-page/${assignment._id}`} className="btn btn-outline btn-secondary">Give Mark</Link></td>
        </tr>
    );
};

export default PendingAssignmentsCard;