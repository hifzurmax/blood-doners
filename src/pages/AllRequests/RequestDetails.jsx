
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaCalendarAlt, FaClock, FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import hd from "../../assets/bn.jpg"
import { FaHandHoldingDroplet, FaLocationDot } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const RequestDetails = () => {
    const { user } = useAuth();
    const request = useLoaderData();
    const { _id, requesterEmail, requesterName, recipientName, bloodGroup, district, upazila, hospitalName, fullAddress, donationDate, donationTime, requestMessage } = request;
    const axiosPublic = useAxiosPublic();
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const donationInfo = {
                donorEmail: user?.email,
                donorName: user?.displayName,
                status: "inprogress"
            };

            const response = await axiosPublic.patch(`/inprogress/${_id}`, donationInfo);

            if (response.data.modifiedCount) {
                // show success popup
                e.target.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Donation Inprogress`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {

                console.error('Request was not successful:', response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        } catch (error) {

            console.error('Error while submitting request:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };
    return (
        <div className="mb-10">
            <div className="hero min-h-[40vh]" style={{ backgroundImage: `url(${hd})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <div className="">
                        <div className="m-12 text-center z-20 text-white">
                            <h2 className="text-3xl mb-3 font-bold">({bloodGroup}) Blood Needed at : {donationDate}</h2>
                            <h3 className="flex justify-center items-center"><FaHome className="mr-1"></FaHome> Home - All Reqests - Details</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex max-w-6xl mx-auto">
                <div className="space-y-6 my-10">
                    <h2 className="card-title text-main"><FaLocationDot></FaLocationDot> Location: {district}, {upazila}</h2>
                    <div className="flex">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border  space-y-1 rounded p-6">
                                <div className="flex text-base font-bold items-center gap-2">
                                    <FaMoneyCheckAlt className="text-main"></FaMoneyCheckAlt>
                                    <p className="text-main">Donation Date</p>
                                </div>
                                <p className="text-main text-lg text-center">{donationDate}</p>
                            </div>
                            <div className="border space-y-1 rounded p-6">
                                <div className="flex text-base font-bold items-center gap-2">
                                    <FaClock className="text-main"></FaClock><h2 className="text-main">Donation Time</h2>
                                </div>
                                <p className="text-main text-lg text-center">{donationTime}</p>
                            </div>
                            <div className="border space-y-1 rounded p-6">
                                <div className="flex text-base font-bold items-center gap-2">
                                    <FaHandHoldingDroplet className="text-main"></FaHandHoldingDroplet ><h2 className="text-main">Blood Group</h2>
                                </div>
                                <p className="text-main text-lg text-center">({bloodGroup})</p>
                            </div>
                            <div className="border space-y-1 rounded p-6">
                                <div className="flex text-base font-bold items-center gap-2">
                                    <FaCalendarAlt className="text-main"></FaCalendarAlt><h2 className="text-main">Hospital</h2>
                                </div>
                                <p className="text-main text-lg text-center">{hospitalName}</p>
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"> </div>
                        <div className="space-y-3">
                            <h2><span className="font-bold text-lg">Requested by :</span> {requesterName}</h2>
                            <h2><span className="font-bold text-lg">Petient Name :</span> {recipientName}</h2>
                            <h2><span className="font-bold text-lg">Requester Email : </span>{requesterEmail}</h2>
                            <p><span className="font-bold text-lg">Full Address : </span>{fullAddress}</p>
                        </div>
                    </div>
                    <h2 className="card-title text-main">Request Message:</h2>
                    <p>{requestMessage}</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                {/* The button to open modal */}
                <label htmlFor="my_modal_7" className="btn px-10 bg-second text-white font-semibold text-lg hover:bg-main"><FaHandHoldingDroplet></FaHandHoldingDroplet> Donate</label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donor Email</span>
                            </label>
                            <input type="email" disabled defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donor Name</span>
                            </label>
                            <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered text-main" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white hover:text-gray-800 btn-block bg-main">
                                Add Donation
                            </button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

        </div>

    );
};

export default RequestDetails;