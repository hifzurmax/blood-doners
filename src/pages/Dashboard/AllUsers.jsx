import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await axiosSecure.get('/all-users');
            return res.data;
        }
    })
    return (
        <div>
            All Users: {users.length}
        </div>
    );
};

export default AllUsers;