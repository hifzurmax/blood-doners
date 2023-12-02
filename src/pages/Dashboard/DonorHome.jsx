import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DonorHome = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: requests = [] } = useQuery({
        queryKey: ['requests'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/donor-requests?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className="md:ml-4 md:mr-4">
            <h3 className="text-main font-bold text-center m-4 text-xl">My Recent Requests</h3>
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
                        <th className="border border-main ">Done/Cancel</th>
                    </tr>
                </thead>
                <tbody className="border border-main">



                    {
                        requests?.slice(0, 3).map(request =>

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
                                    {request.status === "inprogress" ?
                                        <>
                                            <h2>Name: {request.requesterName}</h2> <br />
                                            <h2>Email: {request.requesterEmail}</h2>
                                        </>
                                        :
                                        "Not inprogress"
                                    }
                                </td>
                                <td className="flex pt-2 border-main">
                                    <button className="btn btn-sm"><FaPen></FaPen></button>
                                    <button className="btn btn-sm"><FaEye></FaEye></button>
                                    <button className="btn btn-sm"><FaTrash /></button>
                                </td>
                                {request.status === "inprogress" ?
                                    <td className="border font-medium w-32 border-main ">
                                        <button className="btn btn-xs bg-main mr-1 text-white">Done</button>
                                        <button className="btn btn-xs bg-main text-white">Cancel</button>

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
            <NavLink to="/dashboard/my-donation-requests">
                <button className="btn border-second uppercase mt-4 text-center hover:text-main text-white bg-second">
                    <FaArrowCircleRight></FaArrowCircleRight>view all requests
                </button>
            </NavLink>
        </div>
    );
};

export default DonorHome;