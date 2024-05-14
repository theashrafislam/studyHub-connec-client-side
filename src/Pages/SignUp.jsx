import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/favicon.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const SignUp = () => {
    const { signUpUser, updateUserProfile, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast('Your password must be at least six characters long.', { icon: '⚠', });
            return;
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            toast('Please include at least one uppercase letter in your password.', { icon: '⚠', });
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            toast('Your password must contain at least one lowercase letter.', { icon: '⚠', });
            return;
        }

        signUpUser(email, password)
            .then(result => {
                console.log(result);
                if (result) {
                    updateUserProfile(name, photoURL)
                        .then(() => {
                            signOutUser()
                                .then(res => {
                                        navigate('/sign-in')
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    toast.success("Congratulations! You're now signed up and ready to explore!")

                }
            })
            .catch(error => {
                console.log(error);
                toast.success("Oops! Something went wrong. Please try again later.")
            })
    }
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Sign Up || StudyHub Connect</title>
                </Helmet>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                        <form className="w-full max-w-md" onSubmit={handleFormSubmit}>
                            <div className="flex justify-center mx-auto">
                                <img className="w-[150px]" src={logo} alt="" />
                            </div>

                            <div className="flex items-center justify-center mt-6">
                                <Link to='/sign-up' className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                    sign up
                                </Link>
                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name" name='name' required />
                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" name='photoURL' required />
                            </div>

                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" name='email' required />
                            </div>

                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name='password' required />
                            </div>



                            <div className="mt-6">
                                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign Up
                                </button>

                                <div className="mt-6 text-center ">
                                    <p className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                        Already have an account? <Link className='text-red-500 font-semibold' to='/sign-in'>Sign In</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default SignUp;