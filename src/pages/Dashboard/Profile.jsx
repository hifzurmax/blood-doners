
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axiosPublic.get(`/users?email=${user?.email}`)
            .then(res => {
                setUserData(res.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [axiosPublic, user]);

    return (
        <>
            <div className="md:flex md:mt-4 md:mr-4">
                <div className="hero min-h-[32vh] md:w-1/3 md:ml-4" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <h1 className="mb-3 text-5xl font-bold">{user?.displayName}</h1>

                        </div>
                    </div>
                </div>
                <div className="flex-1 md:ml-4">
                    <div className="p-10 text-2xl font-semibold font-poppins space-y-2 border-2 border-main">
                        <div className="flex gap-2 border-b-2 border-main pb-2">
                            <h2>Role:</h2>
                            <h2 className="font-medium capitalize">{userData?.userRole}</h2>
                        </div>
                        <div className="flex gap-2 border-b-2 border-main pb-2">
                            <h2>Blood Group:</h2>
                            <h2 className="font-medium">{userData?.bloodGroup}</h2>
                        </div>
                        <div className="flex gap-2 border-b-2 border-main pb-2">
                            <h2>Email: </h2>
                            <h2 className="font-medium">{userData?.email}</h2>
                        </div>
                        <div className="flex gap-2 pb-2">
                            <h2>Address: </h2>
                            <h2 className="font-medium">{userData?.upazila}, {userData?.district}</h2>
                        </div>
                    </div>
                </div>

            </div>
            {/* <NavLink to="/dashboard/edit-profile">
                <button className="md:mt-4 md:ml-4 btn border-second hover:text-main text-white bg-second">
                    <FaUserCircle></FaUserCircle> Edit Profile
                </button>
            </NavLink> */}
        </>
    );
};

export default Profile;