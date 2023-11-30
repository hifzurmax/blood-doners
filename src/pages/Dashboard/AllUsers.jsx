import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

import { FaEllipsis } from "react-icons/fa6";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users');
            return res.data;
        }
    })



    const blockUser = (user) => {
        axiosSecure.patch(`/block/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "Blocked",
                    title: "User succesfully blocked",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })

    };

    const unblockUser = (user) => {
        axiosSecure.patch(`/unblock/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "Blocked",
                    title: "User succesfully unblocked",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })

    };

    const makeVolunteer = (user) => {
        axiosSecure.patch(`/make-volunteer/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    };

    const makeAdmin = (user) => {
        axiosSecure.patch(`/make-admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    };
    return (
        <div className="mx-4">
            All Users: {users.length}

            <table className=" w-full border border-main">
                {/* head */}
                <thead className="border border-main">
                    <tr className="border border-main">
                        <th className="border border-main w-10">Avater</th>
                        <th className="border border-main w-64">Email</th>
                        <th className="border border-main w-52">Name</th>
                        <th className="border border-main w-52">User Role</th>
                        <th className="border border-main w-52">Status</th>
                        <th className="border border-main w-12">Action</th>
                    </tr>
                </thead>
                <tbody className="border border-main">



                    {
                        users.map(user =>

                            <tr key={user._id} className="border border-main">
                                <td className="border border-main">
                                    <div className="flex items-center">
                                        <div className="avatar p-1">
                                            <div className="mask mask-squircle">
                                                <img src={user.avater} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-4 border border-main">
                                    {user.email}
                                </td>
                                <td className="pl-4 border border-main">
                                    {user.name}
                                </td>
                                <td className="pl-4 border border-main">
                                    {user.userRole}
                                </td>
                                <th className="border border-main">
                                    <button className="btn px-4 btn-outline btn-sm cursor-default bg-red-400 text-white">{user.status}</button>

                                </th>
                                <th className="border border-main">

                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn text-xl"><FaEllipsis /></div>
                                        <ul className="dropdown-content z-[1] menu p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                                            {user.status === 'active' && (
                                                <button className="btn btn-sm " onClick={() => blockUser(user)}>Block User</button>
                                            )}
                                            {user.status === 'blocked' && (
                                                <button className="btn btn-sm" onClick={() => unblockUser(user)}>Unblock User</button>
                                            )}
                                            {user.userRole === 'donor' && (
                                                <button className="btn btn-sm" onClick={() => makeVolunteer(user)}>Make Volunteer</button>
                                            )}
                                            {(user.userRole === 'donor' || user.userRole === 'volunteer') && (
                                                <button className="btn btn-sm" onClick={() => makeAdmin(user)}>Make Admin</button>
                                            )}
                                            
                                        </ul>
                                    </div>
                                </th>
                            </tr>)
                    }



                </tbody>

            </table>









        </div>
    );
};

export default AllUsers;