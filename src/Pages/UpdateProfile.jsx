import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../AuthProvider/AuthProvider";
const UpdateProfile = () => {

    const { updateUserProfile, user, setUser } = useContext(AuthContext);
    const {displayName, email, photoURL} = user;

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        const { name, photo } = data;
        console.log(name, photo);
        updateUserProfile(name, photo,)
            .then(() => {
                console.log('hello');
                setUser({displayName : name, photoURL : photo, email: email})
                toast.success('Your profile has been updated');
            })
            .catch(error => {
                console.log(error);
            })
            // .then(() => {
            //     // console.log('profile updated');
            //     // setReload(true);
            //     setUser({displayName : name, photoURL : photo, email: email}) 
            //     toast.success('Your profile has been updated');
            // })
            // .catch(() => {
            //     // console.log('profile not updated');
            // })
    }
    return (
        <HelmetProvider>
            <div className="mt-5" data-aos="zoom-in-down" data-aos-duration="1000">
                <Helmet>
                    <title>Update Profile || IndusHub</title>
                </Helmet>
                <div>
                    <h1 className="text-2xl font-bold text-center">Update Your Profile.</h1>
                </div>
                <div className="px-4 lg:max-w-7xl mx-auto">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg">Name</label>
                            <input type="text" name="name" id="name" defaultValue={displayName} className="border-2 p-2" placeholder="Enter your name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500 mt-1">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg">email</label>
                            <input type="email" name="email" id="email" value={email} className="border-2 p-2" placeholder="Enter your name" {...register("email",)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="photo" className="text-lg">Photo URL</label>
                            <input type="text" name="photo" id="photo" defaultValue={photoURL} className="border-2 p-2" placeholder="Enter your photoURL" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500 mt-1">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Update Profile</button>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default UpdateProfile;