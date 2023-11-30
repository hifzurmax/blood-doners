import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import AdminHome from "../pages/Dashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers";

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

            // Admin routes
            {
                path: '',
                element: <AdminHome></AdminHome>
            }, 
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            }, 
        ]
    }
]);