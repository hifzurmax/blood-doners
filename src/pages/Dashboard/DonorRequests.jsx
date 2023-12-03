import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import Swal from 'sweetalert2'

const DonorRequests = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/donor-requests?email=${user?.email}`);
            return res.data;
        }
    })

    const handleDone = (request) => {
        axiosSecure.patch(`/done/${request._id}`)
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
                        title: "User succesfully blocked",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    return (
        <div className="md:ml-4 md:mr-4">
            <h3 className="text-main font-bold text-center m-4 text-xl">My All Donation Requests</h3>
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
                                        request.status === "inprogress" &&
                                        <h2>{request.donorName}
                                            <h2>{request.donorEmail}</h2>
                                        </h2>
                                    }


                                </td>
                                <td className="flex pt-2">
                                    <button className="btn btn-sm"><FaPen></FaPen></button>
                                    <button className="btn btn-sm"><FaEye></FaEye></button>
                                    <button className="btn btn-sm"><FaTrash /></button>
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