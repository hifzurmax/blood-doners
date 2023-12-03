import { FaHome } from "react-icons/fa";
import hd from "../../assets/bn.jpg"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import RequestCard from "./RequestCard";

const AllRequests = () => {
    const axiosPublic = useAxiosPublic();
    const { data: requests = [] } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-requests`);
            return res.data;
        }
    })
    console.log(requests);
    return (
        <div>
            <div className="hero min-h-[40vh]" style={{ backgroundImage: `url(${hd})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>

                    <div className="">
                        <div className="m-12 text-center z-20 text-white">
                            <h2 className="text-3xl mb-3 font-bold">All Donors</h2>
                            <h3 className="flex justify-center items-center"><FaHome className="mr-1"></FaHome> Home - All Donors</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Requests */}
            <div className="max-w-6xl mx-auto">
                <h2>All Users: {requests.length}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        requests.map(request => <RequestCard
                            key={request._id}
                            request={request}
                        >

                        </RequestCard>)
                           
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRequests;