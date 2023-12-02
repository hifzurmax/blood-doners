import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import useUserRole from "../../hooks/useUserRole";

const AllDonationRequests = () => {

    const { Role } = useUserRole();

    const axiosSecure = useAxiosSecure();
    const { data: requests = [] } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-requests?`);
            return res.data;
        }
    })
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
                                        request.status === "inprogress" ?
                                            <h2>Name: {request.requesterName} <br />
                                                <h2>Email: {request.requesterEmail}</h2>
                                            </h2> : ''
                                    }


                                </td>
                                {Role === "volunteer" ?
                                    <td className="flex pt-2 text-second">                                       
                                        <button className="btn btn-sm"><FaEye className="text-second"></FaEye></button>                                       
                                    </td>
                                    :
                                    <td className="flex pt-2 text-second">
                                        <button className="btn btn-sm"><FaPen className="text-second"></FaPen></button>
                                        <button className="btn btn-sm"><FaEye className="text-second"></FaEye></button>
                                        <button className="btn btn-sm"><FaTrash className="text-second"></FaTrash></button>
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