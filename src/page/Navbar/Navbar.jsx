import { Link, NavLink } from "react-router-dom";
import club_logho from '../../image/shawon_logho.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import NavBarProfile from "../../components/NavBarProfile";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    //darkMode functions
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const handleChange = e => {
        if (e.target.checked) {
            setTheme("synthwave")
        }
        else {
            setTheme("cupcake")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])
    //darkMode functions ends here


    const navLinks = <>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChange} checked={theme === "cupcake" ? false : true} />

            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
        <li><NavLink to='/' className=" btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">Home</NavLink></li>
        <li><NavLink to='/' className="btn btn-outline btn-default   border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none ">About Us </NavLink></li>
        <li><NavLink to='/panel-member' className="btn btn-outline btn-default   border-b-lime-600  border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Panel Member </NavLink></li>

        {
            user?'' : <>
                <li><NavLink to='/login' className="btn btn-outline btn-default    border-b-amber-600 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Login </NavLink></li>

                <li><NavLink to='/SignUp' className="btn btn-outline btn-default    border-b-amber-300 border-neutral normal-case text-lg  transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">Create Account</NavLink></li>
            </>
        }
        <li><NavLink to='/' className='btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none'>Join Our Club</NavLink></li>
        <NavBarProfile/>

        {/* <button className="relative bg-gray-800 border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">button one</button> */}
    </>

    return (
        <div className=" bg-inherit  navbar z-10 shadow-2xl  ">
            <div className="w-full max-w-[1700px] items-center  mx-auto   xl:px-20 md:px-10 sm:px-2 px-4">

                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="avatar  sm:block  shadow-[#00f7ff]">
                        <div className="w-28  rounded-3xl  shadow-[#00f7ff]">
                            <img className=" shadow-[#00f7ff]" src={club_logho} />
                        </div>
                    </div>

                    {/* <Link to='/' className="btn btn-ghost normal-case text-base   md:text-xl lg:text-xl ">DAGMC CLUB</Link> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        {navLinks}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;