import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result);
                if (result) {
                    toast.success("Welcome back! You're now signed in and ready to go.", { duration: 3000 });
                    setTimeout(() => {
                        navigate(location.state ? location.state : '/')
                    }, 3000);
                }
            })
            .catch(error => {
                console.log(error);
                toast.error("Sorry, we couldn't sign you in. Please check your credentials and try again.");
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                toast.success("Welcome back! You're now signed in and ready to go.", { duration: 3000 })
                setTimeout(() => {
                    navigate(location.state ? location.state : '/')
                }, 3000);
            })
            .catch(error => {
                console.log(error);
                toast.error("Sorry, we couldn't sign you in. Please check your credentials and try again.");
            })
    }

    return (
        <HelmetProvider>
            <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="mt-16">
                <Helmet>
                    <title>Sign In || StudyHub Connect</title>
                </Helmet>
                <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                    <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}></div>


                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="flex justify-center mx-auto">
                            <h1 className="uppercase font-bold text-xl">Sign In to StudyHub Connect</h1>
                        </div>

                        <a onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="px-4 py-2">
                                <FcGoogle className="text-3xl" />
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                        </a>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                            <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                                with email</a>

                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>

                        <form onSubmit={handleLoginForm}>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                                <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name="email" required/>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                                    <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                                </div>

                                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" required/>
                            </div>

                            <div className="mt-6">
                                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Sign In
                                </button>
                            </div>
                        </form>



                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                            <Link to='/sign-up' className="text-xs text-red-500 font-semibold uppercase  hover:underline">or sign up</Link>

                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
                <Toaster />
            </motion.div>
        </HelmetProvider>
    );
};

export default SignIn;