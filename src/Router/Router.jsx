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
import PendingAssignments from "../Pages/PendingAssignments";
import GiveMarkPage from "../Pages/GiveMarkPage";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://study-hub-connect-server-side.vercel.app/all-assignment')
            },
            {
                path: "/create-assignment",
                element: <PrivateRoute><CreateAssignment/></PrivateRoute>
            },
            {
                path: "/assignment-update/:id",
                element: <PrivateRoute><AssignmentUpdate/></PrivateRoute>,
            },
            {
                path: "/assignment-details-page/:id",
                element: <PrivateRoute><AssignmentDetails/></PrivateRoute>,
                // loader: ({params}) => fetch(`https://study-hub-connect-server-side.vercel.app/all-assignment/${params.id}`)
            },
            {
                path: "/assignment-submission-form/:id",
                element: <PrivateRoute><AssignmentSubmissionForm/></PrivateRoute>
            },
            {
                path: "/my-attemted-assignments",
                element: <PrivateRoute><MyAttemtedAssignments/></PrivateRoute>
            },
            {
                path: "/pending-assignments",
                element: <PrivateRoute><PendingAssignments/></PrivateRoute>,
                // loader: () => fetch('https://study-hub-connect-server-side.vercel.app/submitted-assignment')
            },
            {
                path: "/give-mark-page/:id",
                element: <PrivateRoute><GiveMarkPage/></PrivateRoute>,
            }
        ]
    },
]);

export default router;