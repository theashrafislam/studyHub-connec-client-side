import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AssignmentPage from "../Pages/AssignmentPage";
import CreateAssignment from "../Pages/CreateAssignment";
import AssignmentUpdate from "../Pages/AssignmentUpdate";

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
            }
        ]
    },
]);

export default router;