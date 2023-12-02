import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const {  user } = useAuth();
  



    return (

        <div className="w-full bg-main">
            <div className="navbar flex justify-between text-white max-w-6xl mx-auto">
                <div className="">
                    <div className="dropdown">
                       
                    </div>
                    <NavLink to="/"><img className="h-8" src="https://i.ibb.co/xfbXVzd/logo.png" alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    {
                        user ?
                            <div className="flex items-center gap-4">
                                <div>
                                    <h2 className="text-base font-bold text-white">Welcome<span className="text-second"> {user.displayName},</span> everything looks great.</h2>
                                </div>
                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    
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