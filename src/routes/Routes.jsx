import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import AdminHome from "../pages/Dashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import DonationRequest from "../pages/Dashboard/DonationRequest";
import DonorHome from "../pages/Dashboard/DonorHome";
import VolunteerHome from "../pages/Dashboard/VolunteerHome";
import DonorRequests from "../pages/Dashboard/DonorRequests";
import AllDonationRequests from "../pages/Dashboard/AllDonationRequests";
import Donors from "../pages/DonorsSearch/Donors";
import AllRequests from "../pages/AllRequests/AllRequests";
import RequestDetails from "../pages/AllRequests/RequestDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/donors',
                element: <Donors></Donors>
            },
            {
                path: '/all-requests',
                element: <AllRequests></AllRequests>
            },
            {
                path: '/all-requests/:id',
                element: <RequestDetails></RequestDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/all-requests/${params.id}`)
            },
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'donation-request',
                element: <DonationRequest></DonationRequest>
            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'donorHome',
                element: <DonorHome></DonorHome>
            },
            {
                path: 'volunteerHome',
                element: <VolunteerHome></VolunteerHome>
            },
            {
                path: 'my-donation-requests',
                element: <DonorRequests></DonorRequests>
            },

            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            }, 
            {
                path: 'all-donation-requests',
                element: <AllDonationRequests></AllDonationRequests>
            }, 
        ]
    }
]);