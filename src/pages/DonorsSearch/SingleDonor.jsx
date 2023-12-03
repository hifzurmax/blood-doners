import { FaDroplet, FaEnvelope,  FaLocationDot } from "react-icons/fa6";

const SingleDonor = ({ user }) => {
    const { name, email, bloodGroup, avater, district, upazila } = user;
    return (
        <div className="card card-side border h-40 flex items-center">
            <figure><img className="h-36 border rounded-lg ml-2 w-36" src={avater} alt="Movie" /></figure>
            <div className="ml-8 space-y-2">
                <h2 className="card-title">{name}</h2>
                <p className="flex gap-1 items-center"><FaLocationDot></FaLocationDot > Location{district}, {upazila}</p>
                <p className="flex gap-1 items-center"><FaDroplet></FaDroplet> Blood Group: <span className="text-second">({bloodGroup})</span></p>
                <p className="flex gap-1 items-center"><FaEnvelope></FaEnvelope> Email: {email}</p>

                
            </div>
        </div>
    );
};

export default SingleDonor;