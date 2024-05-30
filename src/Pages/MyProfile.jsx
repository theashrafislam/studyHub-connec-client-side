import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <HelmetProvider>
            <div className="mt-8">
                <Helmet>
                    <title>Your Profile || IndusHub</title>
                </Helmet>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-4/12 md:w-3/12 lg:w-2/12 mx-auto">
                        <img className="w-full rounded-2xl" src={user?.photoURL} alt="" />
                    </div>
                    <div className="mt-4">
                        <h1 className="text-xl"><span className="font-bold">Name:</span> {user?.displayName}</h1>
                        <p className="text-xl"><span className="font-bold">Email:</span> {user?.email}</p>
                    </div>

                    <div className="mt-5">
                        <Link to='/update-profile' className="btn btn-secondary">Update Profile</Link>
                    </div>

                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyProfile;