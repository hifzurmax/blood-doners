import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../pages/Dashboard/DashboardNav";
import useUserRole from "../hooks/useUserRole";
import { FaHome } from "react-icons/fa";
import { FaBandcamp, FaHeart, FaList, FaUser, FaUserGroup } from "react-icons/fa6";


const Dashboard = () => {
    const { Role } = useUserRole();
    console.log(Role);

    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-third">
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                {/* Page content here */}
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-6 space-y-1 w-70 min-h-full bg-main text-white font-bold">
                    {/* Conditional rendering based on user role */}
                    {Role === "admin" && (
                        <>
                            <li className="border"><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/profile"><FaUser></FaUser> Admin Profile</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/all-users"><FaUserGroup></FaUserGroup> All Users</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/all-donation-requests"><FaList></FaList> All Donation Requests</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/donation-request"><FaHeart></FaHeart> Create Donation Request</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/add-blog"><FaBandcamp></FaBandcamp> Add Blog</NavLink></li>

                        </>
                    )}
                    {Role === "volunteer" && (
                        <>

                            <li className="border"><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Volunteer Home</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/profile"><FaUser></FaUser> Volunteer Profile</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/all-donation-requests"><FaList></FaList> All Donation Requests</NavLink></li>
                        </>
                    )}
                    {Role === "donor" && (
                        <>
                            <li className="border"><NavLink to="/dashboard/donorHome"><FaHome></FaHome> Doner Home</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/profile"><FaUser></FaUser> Doner Profile</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/donation-request"><FaHeart></FaHeart> Donation Request</NavLink></li>

                            <li className="border"><NavLink to="/dashboard/my-donation-requests"><FaList></FaList> My Donation Requests</NavLink></li>

                        </>
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;