import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
                <ul className="menu p-4 space-y-1 w-64 min-h-full bg-main text-white font-bold text-lg ">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                    <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                    <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                    <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                    <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;