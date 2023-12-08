import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useState } from "react";

const DonorRequests = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    // Step 1: Define state variable for status filter
    const [statusFilter, setStatusFilter] = useState('');

    const { data: requests = [], refetch } = useQuery({
        // Step 3: Update useQuery hook to include selected status as a query parameter
        queryKey: ['requests', statusFilter],
        enabled: !!user?.email,
        queryFn: async () => {
            // Update API call to include status filter in the query parameters
            const res = await axiosSecure.get(`/donor-requests?email=${user?.email}&status=${statusFilter}`);
            return res.data;
        },
    });

    const handleDelete = (request) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove the job",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/requets/${request._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Removed!',
                                    'The request is removed',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })

    }

    const handleDone = (request) => {
        axiosSecure.patch(`/done/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "Blocked",
                        title: "Donation succesfully done",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }
    const handleCancel = (request) => {
        axiosSecure.patch(`/cancel/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "Blocked",
                        title: "Donation succesfully cancelled",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    return (
        <div className="md:ml-4 md:mr-4">
            <h3 className="text-main font-bold text-center m-4 text-xl">My All Donation Requests</h3>

            <div className="flex justify-center mb-4">
                <button onClick={() => setStatusFilter('')} className={`btn btn-sm ${statusFilter === '' ? 'bg-main text-white' : 'bg-gray-300'}`}>All</button>
                <button onClick={() => setStatusFilter('pending')} className={`btn btn-sm ${statusFilter === 'pending' ? 'bg-main text-white' : 'bg-gray-300'}`}>Pending</button>
                <button onClick={() => setStatusFilter('inprogress')} className={`btn btn-sm ${statusFilter === 'inprogress' ? 'bg-main text-white' : 'bg-gray-300'}`}>In Progress</button>
                <button onClick={() => setStatusFilter('done')} className={`btn btn-sm ${statusFilter === 'done' ? 'bg-main text-white' : 'bg-gray-300'}`}>Done</button>
                <button onClick={() => setStatusFilter('canceled')} className={`btn btn-sm ${statusFilter === 'canceled' ? 'bg-main text-white' : 'bg-gray-300'}`}>Canceled</button>
            </div>

            <table className="w-full border border-main">
                {/* head */}
                <thead className="border border-main">
                    <tr className="border border-main">
                        <th className="border border-main ">Recipient Name</th>
                        <th className="border border-main ">Recipient Location</th>
                        <th className="border border-main ">Donation Date</th>
                        <th className="border border-main ">Donation Time</th>
                        <th className="border border-main ">Donation Status</th>
                        <th className="border border-main ">Donor Information</th>
                        <th className="border border-main w-8">Action</th>
                        <th className="border border-main w-8">Done/Cancel</th>
                    </tr>
                </thead>
                <tbody className="border border-main">



                    {
                        requests.map(request =>

                            <tr key={request._id} className="border text-center h-12 text-main items-center border-main">
                                <td className="border border-main">
                                    {request.recipientName}
                                </td>
                                <td className="pl-4 border border-main">
                                    {request.district}, {request.upazila}
                                </td>
                                <td className="pl-4 border border-main">
                                    {request.donationDate}
                                </td>
                                <td className="pl-4 border border-main">
                                    {request.donationTime}
                                </td>
                                <td className="border font-medium border-main">
                                    {request.status}
                                </td>
                                <td className="border font-normal border-main">

                                    {
                                        request.requesterName &&
                                        <h2>{request.donorName}
                                            <h2>{request.donorEmail}</h2>
                                        </h2>
                                    }


                                </td>
                                <td className="flex pt-2">
                                    <Link to={`/dashboard/updaterequest/${request?._id}`}>
                                        <button className="btn btn-sm">
                                            <FaPen className="text-second"></FaPen>
                                        </button>
                                    </Link>
                                    <Link to={`/dashboard/view-request/${request?._id}`}>
                                        <button className="btn btn-sm">
                                            <FaEye className="text-second"></FaEye>
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(request)}
                                        className="btn btn-sm">
                                        <FaTrash className="text-second" /></button>
                                </td>

                                {request.status === "inprogress" ?
                                    <td className="border font-medium w-32 border-main ">
                                        <button onClick={() => handleDone(request)} className="btn btn-xs bg-main mr-1 text-white">Done</button>
                                        <button onClick={() => handleCancel(request)} className="btn btn-xs bg-main text-white">Cancel</button>

                                    </td>
                                    :
                                    <td className="border font-medium w-32 border-main ">
                                        <button disabled className="btn btn-xs bg-main mr-1 text-white">Done</button>
                                        <button disabled className="btn btn-xs bg-main text-white">Cancel</button>

                                    </td>

                                }

                            </tr>)
                    }



                </tbody>

            </table>
        </div>
    );
};

export default DonorRequests;