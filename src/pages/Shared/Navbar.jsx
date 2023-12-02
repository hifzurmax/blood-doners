import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import useUserRole from "../../hooks/useUserRole";


const Navbar = () => {
    const { logOut, user } = useAuth();
    const { Role } = useUserRole();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLinks = <>
        <li className="mr-10 font-bold">
            <h2

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-base font-bold text-second" : "text-base font-bold text-second"
                }
            >
                Home
            </h2>
        </li>
        <li className="mr-10 font-bold">
            <h2

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-base font-bold text-second" : "text-base font-bold text-second"
                }
            >
                Blog
            </h2>
        </li>
        <li className="mr-10 font-bold">
            <h2

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-base font-bold text-second" : "text-base font-bold text-second"
                }
            >
                About Us
            </h2>
        </li>
        <li className="mr-10 font-bold">
            <h2

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-base font-bold text-second" : "text-base font-bold text-second"
                }
            >
                Contact Us
            </h2>
        </li>
    </>


    return (

        <div className="w-full bg-main">
            <div className="navbar flex justify-between text-white max-w-6xl mx-auto">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-main dropdown-content mt-3 z-[100] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="h-8" src="https://i.ibb.co/xfbXVzd/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    {
                        user ?
                            <div className="flex items-center gap-4">
                                <div>
                                    <h2 className="text-base hidden md:block font-bold text-white">Hi, {user.displayName}</h2>
                                </div>
                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu text-sm font-bold text-main capitalize dropdown-content z-[1] shadow bg-base-100 rounded-box w-52">

                                        {user && (
                                            <>
                                                {Role === "admin" && <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>}
                                                {Role === "donor" && <li><NavLink to="/dashboard/donorHome">Dashboard</NavLink></li>}
                                                {Role === "volunteer" && <li><NavLink to="/dashboard/volunteerHome">Dashboard</NavLink></li>}
                                            </>
                                        )}


                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to='/register'><button className="btn border-second hover:text-main text-white bg-second">
                                <FaUserCircle></FaUserCircle> Apply as a Donor
                            </button></Link>


                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;