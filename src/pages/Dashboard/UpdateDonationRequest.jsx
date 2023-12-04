import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const UpdateDonationRequest = () => {
    const [districts, setDistricts] = useState([]);
    const [newUpazila, setUpazila] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const response = await axios.get('/district.json');
                const districtsData = response.data;
                setDistricts(districtsData);
            } catch (error) {
                console.error('Error fetching district data:', error);
            }
        };

        const fetchUpazila = async () => {
            try {
                const response = await axios.get('/upazila.json');
                const upazilaData = response.data;
                setUpazila(upazilaData);
            } catch (error) {
                console.error('Error fetching upazila data:', error);
            }
        };

        fetchDistricts();
        fetchUpazila();
    }, []);

    const request = useLoaderData();
    console.log(request);

    const { _id, recipientName, bloodGroup, district, upazila, hospitalName, fullAddress, donationDate, donationTime, requestMessage } = request;

    const handleUpdateRequest = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        try {
            const updateInfo = {
                requesterEmail: user?.email,
                requesterName: user?.displayName,
                recipientName: data.get('recipient-name'),
                bloodGroup: data.get('group'),
                district: data.get('district'),
                upazila: data.get('upazila'),
                hospitalName: data.get('hospitalName'),
                fullAddress: data.get('fullAddress'),
                donationDate: data.get('donationDate'),
                donationTime: data.get('donationTime'),
                requestMessage: data.get('requestMessage'),
                
            };

            const response = await axiosSecure.patch(`/update-request/${_id}`, updateInfo);

            if (response.data.modifiedCount) {
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${updateInfo.recipientName} request is updated.`,
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
        <div className="bg-third mb-16 w-full">

            <div className="flex-col max-w-6xl bg-white p-24  mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-poppins font-bold">Update Donation Request</h1>
                </div>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={(e) => handleUpdateRequest(e)}>
                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Requester Email*</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="requester-email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"

                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Requester Name*</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="requester-name"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered"

                                />
                            </div>
                        </div>

                        <div className="flex gap-6">


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Recipient Name</span>
                                </label>
                                <input
                                    defaultValue={recipientName}
                                    type="text"
                                    name="recipient-name"
                                    placeholder="Recipient Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Blood Group Needed*</span>
                                </label>

                                <label>
                                    <select name="group" className="select select-bordered w-full" defaultValue={bloodGroup}>

                                        <option disabled value="">Blood Group Needed?</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-6">



                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Recipient District*</span>
                                </label>
                                <select name="district" className="select select-bordered w-full" defaultValue={district}>
                                    <option disabled value="">Select District</option>
                                    {districts.map(district => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>



                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Recipient Upazila*</span>
                                </label>
                                <select className="input input-bordered" required name="upazila" defaultValue={upazila}>
                                    <option disabled value="">Select Upazila</option>
                                    {newUpazila.map(upazila => (
                                        <option key={upazila.id} value={upazila.name}>
                                            {upazila.name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Hospital Name*</span>
                                </label>
                                <input
                                    defaultValue={hospitalName}
                                    type="text"
                                    name="hospitalName"
                                    placeholder="Hospital Name"
                                    className="input input-bordered"

                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Full Address*</span>
                                </label>
                                <input
                                    defaultValue={fullAddress}
                                    type="text"
                                    name="fullAddress"
                                    placeholder="Full Address"
                                    className="input input-bordered"

                                />
                            </div>

                        </div>
                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Donation Date*</span>
                                </label>
                                <input
                                    defaultValue={donationDate}
                                    type="date"
                                    name="donationDate"
                                    className="input input-bordered"

                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Donation Time*</span>
                                </label>
                                <input
                                    defaultValue={donationTime}
                                    type="time"
                                    name="donationTime"
                                    className="input input-bordered"

                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Request Message*</span>
                            </label>
                            <textarea
                                defaultValue={requestMessage}
                                name="requestMessage"
                                placeholder="Enter your request message"
                                className="textarea textarea-bordered h-24"

                            ></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white hover:text-gray-800 btn-block bg-main">
                                Update Request
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateDonationRequest;