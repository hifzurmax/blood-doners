import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaDroplet, FaMap } from "react-icons/fa6";
import hd from "../../assets/bn.jpg"
import SingleDonor from "./SingleDonor";

const Donors = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-users');
            return res.data;
        }
    })
    console.log(users);
    return (
        <div>
            {/* Header with search form */}
            <div className="hero min-h-[40vh]" style={{ backgroundImage: `url(${hd})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>

                    <div className="">
                        <div className="m-12 text-center z-20 text-white">
                            <h2 className="text-3xl mb-3 font-bold">All Donors</h2>
                            <h3 className="flex justify-center items-center"><FaHome className="mr-1"></FaHome> Home - All Donors</h3>
                        </div>
                        <div className="grid md:grid-cols-4 my-12 mx-auto gap-2 border border-gray-200 p-2 rounded">
                            <div className="flex w-64 items-center p-2 ">
                                <FaDroplet className="text-second mr-2 text-4xl" />
                                <select name="group" className="select select-bordered w-full" defaultValue="">
                                    <option disabled value="">Select a Blood Group?</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="flex w-64 items-center p-2">
                                <FaMap className="text-second mr-2 text-4xl"></FaMap>
                                <select name="group" className="select select-bordered pl-6" defaultValue="">
                                    <option disabled value="">Select Your Location?</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="flex w-64 items-center p-2">
                                <FaMap className="text-second mr-2 text-4xl"></FaMap>
                                <select name="group" className="select select-bordered pl-6" defaultValue="">
                                    <option disabled value="">Select Your Location?</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="flex items-center p-2">
                                <button className="btn w-full border-second hover:text-main text-white bg-second">
                                    <FaSearch></FaSearch> Search Donors
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donors Cards */}
            <div className="max-w-6xl mx-auto">
                <h2>All Users: {users.length}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {
                        users.map(user =>
                            <SingleDonor
                                key={user._id}
                                user={user}
                            ></SingleDonor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Donors;