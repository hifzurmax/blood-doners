import { FaHandHoldingDroplet, FaHeartCircleCheck, FaUserGear } from "react-icons/fa6";
import about from "../../assets/abt.jpg"
const About = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl py-24 gap-4 mx-auto">
        <div className='space-y-6 mx-4 md:mr-16'>
            <div className='text-center md:text-left'>

                <h2 className='text-main text-3xl font-bold mb-2'>How It Work</h2>
                <p className='text-[#74788d]'>Post a request to tell us about your needed blood group. We will quickly match you with the right donors.</p>
            </div>


            <div className='flex'>
                <div className='rounded-full text-6xl object-cover mr-3 text-white'>
                    <FaUserGear className='bg-main p-3 rounded-full'></FaUserGear>
                </div>
                <div>
                    <h4 className='text-main mb-2 text-xl font-bold'>Register an account</h4>
                    <p className='text-[#74788d]'>Due to its widespread use as filler text for layouts, non-readability is of great importance.</p>
                </div>
            </div>



            <div className='flex'>
                <div className='rounded-full text-6xl object-cover mr-3 text-white'>
                    <FaHeartCircleCheck className='bg-main p-3 rounded-full'></FaHeartCircleCheck>
                </div>
                <div>
                    <h4 className='text-main mb-2 text-xl font-bold'>Post a Request</h4>
                    <p className='text-[#74788d]'>There are many variations of passages of avaibookmark-label, but the majority alteration in some form.</p>
                </div>
            </div>

            <div className='flex'>
                <div className='rounded-full text-6xl object-cover mr-3 text-white'>
                    <FaHandHoldingDroplet className='bg-main p-3 rounded-full'></FaHandHoldingDroplet>
                </div>
                <div>
                    <h4 className='text-main mb-2 text-xl font-bold'>Find Your Donor</h4>
                    <p className='text-[#74788d]'>There are many variations of passages of avaibookmark-label, but the majority alteration in some form.</p>
                </div>
            </div>
        </div>
        <div><img src={about} alt="" /></div>
    </div>
    );
};

export default About;