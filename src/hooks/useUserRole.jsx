import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axiosSecure.get(`/users?email=${user?.email}`)
            .then(res => {
                setUserData(res.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [axiosSecure, user]);
    const Role = userData?.userRole;
    const userStatus = userData?.status;
    return { Role, userStatus };

};

export default useUserRole;