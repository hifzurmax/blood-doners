
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className="card card-compact bg-white">
            <figure><img src="{imageUrl}" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[#002642] text-xl font-bold text-center">pp</h2>
                <p className="text-[#002642] text-base text-center">{details.slice(0, 150)}...</p>
                <div className="flex flex-col md:flex-row gap-4">
                    
                    <div className="md:w-1/2">
                        <Link to={`/blog/${id}`}>
                            <button className="badge badge-outline w-full text-base text-main font-bold py-4">View Details</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default BlogCard;