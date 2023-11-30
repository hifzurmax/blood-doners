import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const DonationRequest = () => {
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState([]);
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const response = await axios.get('district.json');
                const districtsData = response.data;
                setDistricts(districtsData);
            } catch (error) {
                console.error('Error fetching district data:', error);
            }
        };

        const fetchUpazila = async () => {
            try {
                const response = await axios.get('upazila.json');
                const upazilaData = response.data;
                setUpazila(upazilaData);
            } catch (error) {
                console.error('Error fetching upazila data:', error);
            }
        };

        // Call the async functions
        fetchDistricts();
        fetchUpazila();
    }, []);

    const onSubmit = async () => {
        console.log('hello');
    }

    return (
        <div className="bg-third mb-16 w-full">

            <div className="flex-col max-w-6xl bg-white p-24  mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Create Your Account</h1>
                </div>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register("name", { required: true })} />
                            </div>
                        </div>

                        <div className="flex gap-6">


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Avater*</span>
                                </label>
                                <input
                                    type="file"
                                    name="avater"
                                    className="file-input file-input-bordered"
                                    {...register("avater", { required: true })}
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Blood Group*</span>
                                </label>

                                <label>
                                    <select {...register("group", { required: true })} name="group" className="select select-bordered w-full" defaultValue="">
                                        <option disabled value="">Your Blood Group?</option>
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
                                    <span className="label-text">District*</span>
                                </label>
                                <select {...register("district", { required: true })} name="district" className="select select-bordered w-full" defaultValue="">
                                    <option disabled value="">Select your District</option>
                                    {districts.map(district => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>



                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Upazila*</span>
                                </label>
                                <select {...register("upazila", { required: true })} className="input input-bordered" required name="upazila" defaultValue="">
                                    <option disabled value="">Select Your Upazila</option>
                                    {upazila.map(upazila => (
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
                                    <span className="label-text">Password*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                    {...register("password", { required: true })}
                                    required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Confirm Password*</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered"
                                />

                            </div>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn text-white hover:text-gray-800 btn-block bg-main">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-red-700 text-base mb-6"></p>

                    <div className="flex justify-center gap-3 items-center">
                        <p className="font-bold text-lg">Signin With</p>
                        {/* <button onClick={handleGoogleLogin} className="btn bg-white border-main hover:bg-main px-16 border hover:shadow-md text-main hover:text-white"><img className="h-5 w-5" src={goo} alt="" /> Google</button> */}
                    </div>
                    <h2 className="text-center mt-4 font-semibold">Already have an account? <Link className="text-main font-bold" to="/login">Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default DonationRequest;