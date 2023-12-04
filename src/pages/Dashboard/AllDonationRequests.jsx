import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import useUserRole from "../../hooks/useUserRole";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllDonationRequests = () => {

    const { Role } = useUserRole();

    const axiosSecure = useAxiosSecure();
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-requests?`);
            return res.data;
        }
    })

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
                                    'The job is removed',
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

    return (
        <div className="m-4">
            <h3 className="text-main font-bold text-center m-4 text-xl">All Blood Donation Requests</h3>
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
                    </tr>
                </thead>
                <tbody className="border border-main">



                    {
                        requests?.map(request =>

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
                                        request.donorName &&
                                        <h2>{request.donorName} <br />
                                            <h2>{request.donorEmail}</h2>
                                        </h2>
                                    }


                                </td>
                                {Role === "volunteer" ?
                                    <td className="flex pt-2 w-14 ml-3 text-center text-second">
                                        <Link to={`/dashboard/view-request/${request?._id}`}>
                                            <button className="btn btn-sm">
                                                <FaEye className="text-second"></FaEye>
                                            </button>
                                        </Link>
                                    </td>
                                    :
                                    <td className="flex pt-2 text-second">
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
                                            onClick={() => handleDelete(request)} className="btn btn-sm">
                                            <FaTrash className="text-second"></FaTrash>
                                        </button>
                                    </td>
                                }
                            </tr>)
                    }



                </tbody>

            </table>

        </div>
    );
};

export default AllDonationRequests;