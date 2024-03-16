import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/' className=" btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">Home</NavLink></li>
        <li><NavLink to='/' className="btn btn-outline btn-default  text-white  border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none ">About Us </NavLink></li>
        <li><NavLink to='/' className="btn btn-outline btn-default  text-white border-b-lime-600  border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Panel Member </NavLink></li>

        <li><NavLink to='/login' className="btn btn-outline btn-default  text-white   border-b-amber-600 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Login </NavLink></li>

        <li><NavLink to='/SignUp' className="btn btn-outline btn-default  text-white   border-b-amber-300 border-neutral normal-case text-lg  transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">Create Account</NavLink></li>
        <li><NavLink to='/' className='btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none'>Join Our Club</NavLink></li>

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

                    <div className="avatar  sm:block">
                        <div className="w-24  rounded-3xl ">
                            <img className="" src={'https://th.bing.com/th/id/OIP.TnaniGd08VS-OBcSoLLlZQHaGL?rs=1&pid=ImgDetMa'} />
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