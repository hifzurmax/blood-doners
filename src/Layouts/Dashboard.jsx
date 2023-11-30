import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // TODO: Replace this with the actual user role fetched from the database
    const userRole = "admin"; // For demonstration purposes, assuming the user is an admin
    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-third">
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-10 space-y-1 w-64 min-h-full bg-main text-white font-bold text-lg ">
                    {/* Conditional rendering based on user role */}
                    {userRole === "admin" && (
                        <>
                            <li><NavLink to="/dashboard/profile">Admin Profile</NavLink></li>
                            <li><NavLink to="/dashboard/all-users">All Users</NavLink></li>
                            <li><NavLink to="/dashboard/all-blood-donation-request
">All Blood Donation Requests</NavLink></li>
                            <li><NavLink to="/dashboard/content-management
">Content Management</NavLink></li>

                        </>
                    )}
                    {userRole === "volunteer" && (
                        <>
                            <li><NavLink to="/dashboard/profile">Volanteer Profile</NavLink></li>
                            {/* Add other volunteer routes here */}
                        </>
                    )}
                    {userRole === "donor" && (
                        <>
                            <li><NavLink to="/dashboard/profile"> Doner Profile</NavLink></li>

                            {/* Add other donor routes here */}
                        </>
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;