import PropTypes from 'prop-types';

const AttemtedAssignmentCard = ({ assignment }) => {
    const { additionalNotes, submissionStatus, feedback, mark, id, title} = assignment;
    return (
        <div className="mt-10 mx-4 lg:mx-0">
            <div className="w-full px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400">Assignment Id: {id}</span>
                    <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{submissionStatus}</span>
                </div>

                <div>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{title}</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300"><span className="font-medium">Additional Notes: </span>{additionalNotes}</p>
                </div>

                <div>
                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <span className="font-medium">Marks: </span>
                        <p className="mx-2 text-blue-600 dark:text-blue-400" tabIndex="0">{mark ? mark : 'Unavailable'}</p>
                        <span className="font-medium">Feedback: </span>
                        <p className="mx-2 text-blue-600 dark:text-blue-400" tabIndex="0">{feedback ? feedback : 'Unavailable'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttemtedAssignmentCard;

AttemtedAssignmentCard.propTypes = {
    assignment: PropTypes.object
}