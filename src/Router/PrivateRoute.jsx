import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";
import loadingGit from "../../public/loading.gif"

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <div className="flex justify-center items-center mt-20">
            <img src={loadingGit} alt="" className="w-[150px]"/>
        </div>

    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/sign-in"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}