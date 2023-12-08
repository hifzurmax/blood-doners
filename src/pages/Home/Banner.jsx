
import { FaDroplet } from "react-icons/fa6";
import banner from "../../assets/bn.jpg"
import { FaMap, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Banner = () => {
    const [districts, setDistricts] = useState([]);
    useEffect(() => {
        axios.get('district.json')
            .then(function (res) {
                const districtsData = res.data;
                setDistricts(districtsData);
            })
            .catch(function (error) {
                console.error('Error fetching district data:', error);
            });
    }, []);
    return (

        <div className="hero w-full mx-auto min-h-[40vh] md:min-h-[70vh] font-poppins" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto justify-center items-center p-2 md:p-0">
                <h3 className='leading-snug text-center text-3xl md:text-5xl font-semibold text-white'>A lot of things hurt. <br /><span className='text-second'>Saving lives</span> doesn't have to</h3>
                <div className="flex flex-col md:flex-row my-12 max-w-3xl pl-8 mx-auto gap-2 border border-gray-200 p-2 rounded">
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
                        <select name="district" className="select select-bordered w-full" defaultValue="">
                            <option disabled value="">Select your District</option>
                            {districts.map(district => (
                                <option key={district.id} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center p-2">
                        <NavLink to="/donors">
                            <button className="btn border-second hover:text-main text-white bg-second">
                                <FaSearch></FaSearch> Search Donors
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;