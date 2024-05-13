import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AssignmentPage from "../Pages/AssignmentPage";
import CreateAssignment from "../Pages/CreateAssignment";
import AssignmentUpdate from "../Pages/AssignmentUpdate";
import AssignmentDetails from "../Pages/AssignmentDetails";
import AssignmentSubmissionForm from "../Pages/AssignmentSubmissionForm";
import MyAttemtedAssignments from "../Pages/MyAttemtedAssignments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/sign-in",
                element: <SignIn/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/assignment",
                element: <AssignmentPage/>,
                loader: () => fetch('http://localhost:5000/all-assignment')
            },
            {
                path: "/create-assignment",
                element: <CreateAssignment/>
            },
            {
                path: "/assignment-update/:id",
                element: <AssignmentUpdate/>,
            },
            {
                path: "/all-assignment/:id",
                element: <AssignmentDetails/>,
                // loader: ({params}) => fetch(`http://localhost:5000/all-assignment/${params.id}`)
            },
            {
                path: "/assignment-submission-form/:id",
                element: <AssignmentSubmissionForm/>
            },
            {
                path: "/my-attemted-assignments",
                element: <MyAttemtedAssignments/>
            }
        ]
    },
]);

export default router;