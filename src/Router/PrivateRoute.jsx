import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user, loading} = useContext(AuthContext);


    if(loading) {
        return <div className="flex justify-center items-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname}  to="/sign-in"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}