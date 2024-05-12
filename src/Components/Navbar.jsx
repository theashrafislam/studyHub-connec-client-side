import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";

const Navbar = () => {
    const navLinks = <>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/assignment">Assignments</NavLink></li>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/sign-in">Sign In</NavLink></li>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/sign-up">Sign Up</NavLink></li>
    </>

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            // setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            // setTheme(systemTheme);
            document.documentElement.setAttribute('data-theme', systemTheme);
        }
    }, []);

    const handleThemeChange = (selectedTheme) => {
        localStorage.setItem('theme', selectedTheme);
        document.documentElement.setAttribute('data-theme', selectedTheme);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">StudyHub Connect</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn"><MdWbSunny className="text-3xl" /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleThemeChange('dark')}><a>Dark</a></li>
                            <li onClick={() => handleThemeChange('light')}><a>Light</a></li>
                            <li onClick={() => handleThemeChange('system')}><a>System</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Navbar;