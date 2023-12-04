import useAuth from "../../hooks/useAuth";

const Blogs = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;