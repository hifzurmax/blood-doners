
import { FaDroplet } from "react-icons/fa6";
import photo from "../../assets/bn.jpg"
const AvailableDonors = () => {
    return (
        <>
            <h2 className="text-main text-3xl font-bold text-center font-poppins mt-24 mb-12">Avaiable Blood Donors</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 max-w-6xl mx-auto gap-6">
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> A+</h2>
                        <h2 className="text-2xl font-bold text-white">(34)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> A-</h2>
                        <h2 className="text-2xl font-bold text-white">(12)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> B+</h2>
                        <h2 className="text-2xl font-bold text-white">(15)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> B-</h2>
                        <h2 className="text-2xl font-bold text-white">(64)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> AB+</h2>
                        <h2 className="text-2xl font-bold text-white">(24)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> AB-</h2>
                        <h2 className="text-2xl font-bold text-white">(34)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> O+</h2>
                        <h2 className="text-2xl font-bold text-white">(44)</h2>
                    </div>
                </div>
                <div className="h-32 rounded-md relative overflow-hidden">
                    <img className="w-full" src={photo} alt="brand-name" />
                    <div className="absolute  rounded-md inset-0 bg-slate-800 opacity-70 flex items-center justify-center flex-col">
                        <h2 className="text-4xl flex font-bold text-white"><FaDroplet className="text-2xl mt-2 mr-1"></FaDroplet> O-</h2>
                        <h2 className="text-2xl font-bold text-white">(14)</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableDonors;