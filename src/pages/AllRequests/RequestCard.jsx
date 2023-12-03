
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const RequestCard = ({request}) => {
    const {_id, requesterName, district,  upazila, donationDate, donationTime} = request;
    return (
        <div className="card card-side border h-52 flex items-center bg-main text-white">
           
            <div className="ml-8 space-y-2">
                <h2 className="card-title">{requesterName}</h2>
                <p className="flex gap-1 items-center"><FaLocationDot></FaLocationDot > Location: {district}, {upazila}</p>
                <p className="flex gap-1 items-center"><FaCalendar></FaCalendar> Donation Date: {donationDate}</p>
                <p className="flex gap-1 items-center"><FaClock></FaClock> Donation Time: {donationTime}</p>
               <NavLink to={`/all-requests/${_id}`}> <button className="text-second leading-4 border-b-2 pb-1 border-b-second">View Request</button></NavLink>

            </div>
        </div>
    );
};

export default RequestCard;